<?php

namespace Maravel\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

/**
 * Commande pour générer une nouvelle permission RBAC, à la manière
 * d'une migration.
 *
 * Cas d'usage : le modèle Product (et sa ProductPolicy) existent déjà,
 * et on veut ajouter une action métier « generate ». La commande :
 *
 * 1. Génère une migration de données versionnée qui insère la permission
 *    (action, subject) en base — applicable sur tous les environnements
 *    via `php artisan migrate`, réversible via `migrate:rollback` ;
 * 2. Injecte la méthode d'ability correspondante (ex: generate()) dans la
 *    policy existante du modèle, pour que `Gate::inspect('generate', ...)`
 *    et `customAction('generate', ...)` fonctionnent immédiatement.
 */
class MakePermission extends Command
{
    /**
     * Le nom et la signature de la commande
     */
    protected $signature = 'make:maravel.permission
                            {action : L\'action de la permission (ex: generate, validate, export)}
                            {model : Le modèle/sujet concerné (ex: Product)}
                            {--label= : Libellé lisible de la permission}
                            {--description= : Description de la permission}
                            {--role=* : Nom(s) de rôle(s) auxquels rattacher la permission lors du migrate}
                            {--skip-policy : Ne pas injecter la méthode d\'ability dans la policy du modèle}';

    /**
     * La description de la commande
     */
    protected $description = 'Génère une permission RBAC versionnée (migration de données) et la méthode d\'ability associée dans la policy du modèle';

    /**
     * Exécute la commande
     */
    public function handle()
    {
        $action = (string) $this->argument('action');
        $model = Str::studly((string) $this->argument('model'));
        $subject = strtolower($model);

        // L'action devient un nom de méthode de policy et une valeur en base :
        // on la restreint à un identifiant PHP valide.
        if (!preg_match('/^[a-zA-Z][a-zA-Z0-9_]*$/', $action)) {
            $this->error("❌ L'action « {$action} » n'est pas valide (lettres, chiffres et underscores uniquement, ex: generate, export_pdf).");
            return Command::FAILURE;
        }

        $this->info("Génération de la permission « {$action} / {$subject} »...");
        $this->newLine();

        // Étape 1 : migration de données versionnée
        if (!$this->createPermissionMigration($action, $subject)) {
            return Command::FAILURE;
        }

        // Étape 2 : injection de la méthode d'ability dans la policy du modèle
        if (!$this->option('skip-policy')) {
            $this->newLine();
            $this->injectPolicyMethod($action, $model);
        }

        $this->newLine();
        $this->comment('Prochaines étapes :');
        $this->line('1. Lancez la migration : php artisan migrate');
        $roles = $this->roleNames();
        if (empty($roles)) {
            $this->line("2. Rattachez la permission à un rôle : PUT /api/roles/{id} avec {\"permissions\": [{\"action\": \"{$action}\", \"subject\": \"{$subject}\"}]}");
        } else {
            $this->line('2. La permission sera rattachée aux rôles : ' . implode(', ', $roles));
        }
        $this->line("3. Protégez votre action de contrôleur : \$this->customAction('{$action}', ..., {$model}::class) ou Gate::authorize('{$action}', {$model}::class)");

        return Command::SUCCESS;
    }

    /**
     * Crée la migration de données qui insère la permission en base.
     *
     * @return bool false si la génération a échoué (stub manquant, doublon refusé...)
     */
    protected function createPermissionMigration(string $action, string $subject): bool
    {
        $suffix = "add_{$action}_{$subject}_permission";

        // Éviter les doublons : une migration pour ce couple (action, subject) existe déjà.
        $existing = File::glob(database_path("migrations/*_{$suffix}.php"));
        if (!empty($existing)) {
            $this->warn("⚠️  Une migration pour la permission « {$action} / {$subject} » existe déjà :");
            $this->line('  ' . str_replace(base_path() . DIRECTORY_SEPARATOR, '', $existing[0]));
            return true;
        }

        $stubPath = __DIR__ . '/../../Stubs/permission-migration.stub';
        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub permission-migration.stub est introuvable.');
            return false;
        }

        $label = $this->option('label');
        $description = $this->option('description');

        $content = str_replace(
            [
                '{{ action }}',
                '{{ subject }}',
                '{{ label }}',
                '{{ description }}',
                '{{ roles }}',
            ],
            [
                $action,
                $subject,
                $this->exportNullableString($label),
                $this->exportNullableString($description),
                $this->exportStringArray($this->roleNames()),
            ],
            File::get($stubPath)
        );

        $timestamp = date('Y_m_d_His');
        $migrationPath = database_path("migrations/{$timestamp}_{$suffix}.php");

        File::put($migrationPath, $content);

        $this->info('✓ Migration de permission créée.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $migrationPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');

        return true;
    }

    /**
     * Injecte la méthode d'ability (ex: generate()) dans la policy du modèle,
     * pour que Gate::inspect()/customAction() la trouvent. Sans effet si la
     * policy n'existe pas ou si la méthode y est déjà définie.
     */
    protected function injectPolicyMethod(string $action, string $model): void
    {
        $methodName = Str::camel($action);
        $policyPath = app_path("Policies/{$model}Policy.php");

        if (!File::exists($policyPath)) {
            $this->warn("⚠️  La policy {$model}Policy n'existe pas : méthode « {$methodName}() » non injectée.");
            $this->comment("   Créez-la d'abord : php artisan make:maravel.policy {$model}Policy");
            $this->comment("   puis relancez cette commande, ou ajoutez la méthode manuellement.");
            return;
        }

        $content = File::get($policyPath);

        // La méthode existe déjà (définie manuellement ou par une exécution précédente).
        if (preg_match('/function\s+' . preg_quote($methodName, '/') . '\s*\(/', $content)) {
            $this->warn("⚠️  La méthode « {$methodName}() » existe déjà dans {$model}Policy, injection ignorée.");
            return;
        }

        $method = $this->buildPolicyMethod($action, $methodName);

        // Insérer la méthode avant la dernière accolade fermante de la classe.
        $lastBrace = strrpos($content, '}');
        if ($lastBrace === false) {
            $this->error("❌ Structure inattendue dans {$model}Policy.php : méthode non injectée.");
            return;
        }

        $content = substr_replace($content, $method, $lastBrace, 0);

        // S'assurer que les imports nécessaires sont présents (les policies
        // générées par make:maravel.policy les ont déjà).
        $content = $this->ensureImport($content, 'Illuminate\Auth\Access\Response');
        $content = $this->ensureImport($content, 'Illuminate\Database\Eloquent\Model');

        File::put($policyPath, $content);

        $this->info("✓ Méthode « {$methodName}() » injectée dans {$model}Policy.");
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $policyPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }

    /**
     * Construit le code de la méthode d'ability à injecter dans la policy.
     */
    protected function buildPolicyMethod(string $action, string $methodName): string
    {
        return <<<PHP

    /**
     * Vérifie si l'utilisateur peut « {$action} »
     * (générée par make:maravel.permission)
     *
     * @param object \$connectedUser Utilisateur connecté
     * @param Model|null \$model Modèle ciblé (optionnel)
     * @return Response
     */
    public function {$methodName}(\$connectedUser, ?Model \$model = null)
    {
        \$canPerform = \$this->check(["{$action}"], \$this->modelName, \$connectedUser);

        return \$canPerform
            ? Response::allow()
            : Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
    }

PHP;
    }

    /**
     * Ajoute un `use` en tête de fichier s'il est absent.
     */
    protected function ensureImport(string $content, string $class): string
    {
        if (preg_match('/^use\s+' . preg_quote($class, '/') . '\s*;/m', $content)) {
            return $content;
        }

        return preg_replace(
            '/^(namespace\s+[^;]+;)/m',
            "$1\n\nuse {$class};",
            $content,
            1
        );
    }

    /**
     * Noms de rôles passés via --role (nettoyés).
     *
     * @return array<int, string>
     */
    protected function roleNames(): array
    {
        return array_values(array_filter(array_map('trim', (array) $this->option('role'))));
    }

    /**
     * Exporte une chaîne nullable en code PHP pour le stub.
     */
    protected function exportNullableString(?string $value): string
    {
        return ($value === null || $value === '')
            ? 'null'
            : var_export($value, true);
    }

    /**
     * Exporte un tableau de chaînes en code PHP pour le stub.
     *
     * @param array<int, string> $values
     */
    protected function exportStringArray(array $values): string
    {
        if (empty($values)) {
            return '[]';
        }

        return '[' . implode(', ', array_map(fn($value) => var_export($value, true), $values)) . ']';
    }
}
