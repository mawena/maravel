<?php

namespace Maravel\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

/**
 * Commande pour installer Maravel dans un projet Laravel
 *
 * Cette commande automatise l'installation de Maravel en :
 * - Exécutant la commande install:api de Laravel
 * - Créant le contrôleur AuthController
 * - Configurant les routes API
 * - Créant la migration pour le profil utilisateur
 * - Modifiant le modèle User pour hériter de AuthenticatableBase
 */
class InstallCommand extends Command
{
    /**
     * Le nom et la signature de la commande
     */
    protected $signature = 'maravel:install';

    /**
     * La description de la commande
     */
    protected $description = 'Installe Maravel dans votre projet Laravel';

    /**
     * Exécute la commande
     */
    public function handle()
    {
        $this->info('Installation de Maravel...');
        $this->newLine();

        // Étape 1: Installer l'API Laravel
        $this->info('📦 Installation de Laravel Sanctum et configuration API...');
        $this->installSanctumIfNeeded();
        $this->newLine();

        // Étape 2: Créer le contrôleur AuthController
        $this->info('🔐 Création du contrôleur d\'authentification...');
        $this->createAuthController();
        $this->newLine();

        // Étape 3: Configurer les routes API
        $this->info('🛣️  Configuration des routes API...');
        $this->configureApiRoutes();
        $this->newLine();

        // Étape 4: Créer la migration pour le profil utilisateur
        $this->info('👤 Création de la migration pour le profil utilisateur...');
        $this->createProfileMigration();
        $this->newLine();

        // Étape 4b: Créer la migration pour le statut du compte
        $this->info('🔒 Création de la migration pour le statut du compte...');
        $this->createAccountStatusMigration();
        $this->newLine();

        // Étape 5: Configurer le modèle User
        $this->info('🔧 Configuration du modèle User...');
        $this->configureUserModel();
        $this->newLine();

        // Étape 5b: Créer le contrôleur UserController
        $this->info('👥 Création du contrôleur des utilisateurs...');
        $this->createUserController();
        $this->newLine();

        // Étape 5c: Créer la policy UserPolicy
        $this->info('🔐 Création de la policy des utilisateurs...');
        $this->createUserPolicy();
        $this->newLine();

        // Étape 5d: Intégrer le middleware AccountStatusMiddleware
        $this->info('🛡️  Intégration du middleware de statut de compte...');
        $this->integrateAccountStatusMiddleware();
        $this->newLine();

        // Étape 6: Publier la configuration
        $this->info('⚙️  Publication de la configuration...');
        $this->call('vendor:publish', [
            '--tag' => 'advanced-api-controller-config',
            '--force' => false
        ]);
        $this->newLine();

        // Message de succès
        $this->info('✅ Maravel a été installé avec succès !');
        $this->newLine();

        $this->comment('Prochaines étapes :');
        $this->line('1. Lancez les migrations : php artisan migrate');
        $this->line('2. Testez l\'authentification via les endpoints API');
        $this->line('3. Consultez la documentation : https://github.com/mawena/maravel');
        $this->newLine();

        return Command::SUCCESS;
    }

    /**
     * Installe Sanctum uniquement si ce n'est pas déjà fait
     */
    protected function installSanctumIfNeeded()
    {
        // Vérifier si les migrations de Sanctum existent déjà
        $sanctumMigrations = File::glob(database_path('migrations/*_create_personal_access_tokens_table.php'));

        if (!empty($sanctumMigrations)) {
            $this->warn('⚠️  Sanctum est déjà installé. Étape ignorée.');
            $this->comment('   Migration trouvée : ' . basename($sanctumMigrations[0]));
            return;
        }

        // Vérifier si le fichier de configuration api.php existe déjà
        $apiConfigExists = File::exists(base_path('config/sanctum.php'));

        if ($apiConfigExists) {
            $this->warn('⚠️  La configuration Sanctum existe déjà.');
        }

        // Installer l'API Laravel (Sanctum)
        $this->call('install:api', ['--no-interaction' => true]);
        $this->info('✓ Sanctum installé avec succès.');
    }

    /**
     * Crée le contrôleur AuthController
     */
    protected function createAuthController()
    {
        // Chemin du répertoire cible
        $targetDir = app_path('Http/Controllers/API');
        $targetPath = $targetDir . '/AuthController.php';

        // Vérifier si le contrôleur existe déjà
        if (File::exists($targetPath)) {
            if (!$this->confirm('Le contrôleur AuthController existe déjà. Voulez-vous le remplacer ?', false)) {
                $this->warn('⚠️  AuthController non modifié.');
                return;
            }
        }

        // Créer le répertoire s'il n'existe pas
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        // Copier le stub vers le fichier cible
        $stubPath = __DIR__ . '/../../Stubs/auth-controller.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub auth-controller.stub est introuvable.');
            return;
        }

        File::copy($stubPath, $targetPath);

        $this->info('✓ AuthController créé avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }

    /**
     * Configure le fichier routes/api.php
     */
    protected function configureApiRoutes()
    {
        $routesPath = base_path('routes/api.php');

        // Vérifier si le fichier existe
        if (!File::exists($routesPath)) {
            $this->error('❌ Le fichier routes/api.php est introuvable.');
            return;
        }

        // Lire le contenu actuel
        $currentContent = File::get($routesPath);

        // Vérifier si les routes d'authentification existent déjà
        if (str_contains($currentContent, 'AuthController')) {
            if (!$this->confirm('Le fichier routes/api.php contient déjà des références à AuthController. Voulez-vous le remplacer ?', false)) {
                $this->warn('⚠️  Fichier routes/api.php non modifié.');
                return;
            }
        }

        // Charger le stub des routes
        $stubPath = __DIR__ . '/../../Stubs/api-routes.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub api-routes.stub est introuvable.');
            return;
        }

        $routesContent = File::get($stubPath);

        // Remplacer le contenu du fichier routes/api.php
        File::put($routesPath, $routesContent);

        $this->info('✓ Fichier routes/api.php configuré avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $routesPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        $this->newLine();
        $this->comment('Routes disponibles :');
        $this->line('• POST   /api/auth/login - Connexion');
        $this->line('• GET    /api/auth/data - Données utilisateur (authentifié)');
        $this->line('• DELETE /api/auth/logout - Déconnexion (authentifié)');
        $this->line('• PUT    /api/users/update-password - Changer le mot de passe (authentifié)');
        $this->line('• GET    /api/users - Liste des utilisateurs (authentifié + statut actif)');
        $this->line('• POST   /api/users - Créer un utilisateur (authentifié + statut actif)');
        $this->line('• GET    /api/users/{id} - Voir un utilisateur (authentifié + statut actif)');
        $this->line('• PUT    /api/users/{id} - Modifier un utilisateur (authentifié + statut actif)');
        $this->line('• DELETE /api/users/{id} - Supprimer un utilisateur (authentifié + statut actif)');
    }

    /**
     * Crée la migration pour ajouter le profil utilisateur
     */
    protected function createProfileMigration()
    {
        // Nom de la migration avec timestamp
        $timestamp = date('Y_m_d_His');
        $migrationName = "{$timestamp}_add_profile_to_users_table.php";
        $migrationPath = database_path('migrations/' . $migrationName);

        // Vérifier si une migration similaire existe déjà
        $existingMigrations = File::glob(database_path('migrations/*_add_profile_to_users_table.php'));

        if (!empty($existingMigrations)) {
            if (!$this->confirm('Une migration pour ajouter le profil utilisateur existe déjà. Voulez-vous la remplacer ?', false)) {
                $this->warn('⚠️  Migration non créée.');
                return;
            }
            // Supprimer l'ancienne migration
            foreach ($existingMigrations as $oldMigration) {
                File::delete($oldMigration);
            }
        }

        // Charger le stub de la migration
        $stubPath = __DIR__ . '/../../Stubs/migration.add_profile_to_users.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub migration.add_profile_to_users.stub est introuvable.');
            return;
        }

        // Copier le stub vers le fichier de migration
        File::copy($stubPath, $migrationPath);

        $this->info('✓ Migration créée avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $migrationPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }

    /**
     * Configure le modèle User
     */
    protected function configureUserModel()
    {
        $userModelPath = app_path('Models/User.php');

        // Vérifier si le fichier User.php existe
        if (!File::exists($userModelPath)) {
            $this->error('❌ Le fichier User.php est introuvable.');
            return;
        }

        // Lire le contenu actuel
        $currentContent = File::get($userModelPath);

        // Vérifier si le modèle hérite déjà de AuthenticatableBase
        if (str_contains($currentContent, 'AuthenticatableBase')) {
            if (!$this->confirm('Le modèle User hérite déjà de AuthenticatableBase. Voulez-vous le remplacer ?', false)) {
                $this->warn('⚠️  Modèle User non modifié.');
                return;
            }
        }

        // Charger le stub du modèle User
        $stubPath = __DIR__ . '/../../Stubs/user-model.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-model.stub est introuvable.');
            return;
        }

        $userContent = File::get($stubPath);

        // Remplacer le contenu du fichier User.php
        File::put($userModelPath, $userContent);

        $this->info('✓ Modèle User configuré avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $userModelPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        $this->newLine();
        $this->comment('Modifications apportées :');
        $this->line('• Héritage de AuthenticatableBase');
        $this->line('• Ajout du champ profile dans $fillable');
        $this->line('• Configuration des $enumCasts pour le profil');
        $this->line('• Ajout de la méthode getAbilityRulesAttribute()');
        $this->line('• Ajout de $appends = [\'ability_rules\']');
    }

    /**
     * Crée la migration pour ajouter le statut de compte utilisateur
     */
    protected function createAccountStatusMigration()
    {
        // Nom de la migration avec timestamp
        $timestamp = date('Y_m_d_His');
        $migrationName = "{$timestamp}_add_account_status_to_users_table.php";
        $migrationPath = database_path('migrations/' . $migrationName);

        // Vérifier si une migration similaire existe déjà
        $existingMigrations = File::glob(database_path('migrations/*_add_account_status_to_users_table.php'));

        if (!empty($existingMigrations)) {
            if (!$this->confirm('Une migration pour ajouter le statut de compte existe déjà. Voulez-vous la remplacer ?', false)) {
                $this->warn('⚠️  Migration non créée.');
                return;
            }
            // Supprimer l'ancienne migration
            foreach ($existingMigrations as $oldMigration) {
                File::delete($oldMigration);
            }
        }

        // Charger le stub de la migration
        $stubPath = __DIR__ . '/../../Stubs/migration.add_account_status_to_users.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub migration.add_account_status_to_users.stub est introuvable.');
            return;
        }

        // Copier le stub vers le fichier de migration
        File::copy($stubPath, $migrationPath);

        $this->info('✓ Migration créée avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $migrationPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }

    /**
     * Crée le contrôleur UserController
     */
    protected function createUserController()
    {
        // Chemin du répertoire cible
        $targetDir = app_path('Http/Controllers/API');
        $targetPath = $targetDir . '/UserController.php';

        // Vérifier si le contrôleur existe déjà
        if (File::exists($targetPath)) {
            if (!$this->confirm('Le contrôleur UserController existe déjà. Voulez-vous le remplacer ?', false)) {
                $this->warn('⚠️  UserController non modifié.');
                return;
            }
        }

        // Créer le répertoire s'il n'existe pas
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        // Copier le stub vers le fichier cible
        $stubPath = __DIR__ . '/../../Stubs/user-controller.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-controller.stub est introuvable.');
            return;
        }

        File::copy($stubPath, $targetPath);

        $this->info('✓ UserController créé avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }

    /**
     * Crée la policy UserPolicy
     */
    protected function createUserPolicy()
    {
        // Chemin du répertoire cible
        $targetDir = app_path('Policies');
        $targetPath = $targetDir . '/UserPolicy.php';

        // Vérifier si la policy existe déjà
        if (File::exists($targetPath)) {
            if (!$this->confirm('La policy UserPolicy existe déjà. Voulez-vous la remplacer ?', false)) {
                $this->warn('⚠️  UserPolicy non modifiée.');
                return;
            }
        }

        // Créer le répertoire s'il n'existe pas
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        // Copier le stub vers le fichier cible
        $stubPath = __DIR__ . '/../../Stubs/user-policy.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-policy.stub est introuvable.');
            return;
        }

        File::copy($stubPath, $targetPath);

        $this->info('✓ UserPolicy créée avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');

        // Enregistrer la policy dans AuthServiceProvider si nécessaire
        $this->registerPolicyInAuthServiceProvider();
    }

    /**
     * Enregistre la UserPolicy dans AuthServiceProvider si celui-ci existe
     */
    protected function registerPolicyInAuthServiceProvider()
    {
        $authServiceProviderPath = app_path('Providers/AuthServiceProvider.php');

        // Vérifier si AuthServiceProvider existe
        if (!File::exists($authServiceProviderPath)) {
            $this->comment('ℹ️  AuthServiceProvider non trouvé. La policy sera découverte automatiquement.');
            return;
        }

        // Lire le contenu actuel
        $currentContent = File::get($authServiceProviderPath);

        // Vérifier si UserPolicy est déjà enregistrée
        if (str_contains($currentContent, 'UserPolicy')) {
            $this->comment('ℹ️  UserPolicy déjà enregistrée dans AuthServiceProvider.');
            return;
        }

        // Ajouter l'import de User et UserPolicy
        if (!str_contains($currentContent, 'use App\Models\User;')) {
            $currentContent = preg_replace(
                '/(namespace App\\\\Providers;)/',
                "$1\n\nuse App\Models\User;",
                $currentContent
            );
        }

        if (!str_contains($currentContent, 'use App\Policies\UserPolicy;')) {
            $currentContent = preg_replace(
                '/(use App\\\\Models\\\\User;)/',
                "$1\nuse App\Policies\UserPolicy;",
                $currentContent
            );
        }

        // Ajouter la policy dans le tableau $policies
        $policyEntry = "\n        User::class => UserPolicy::class,";

        if (preg_match('/protected\s+\$policies\s*=\s*\[/', $currentContent)) {
            // Le tableau $policies existe déjà
            $currentContent = preg_replace(
                '/(protected\s+\$policies\s*=\s*\[)/',
                "$1{$policyEntry}",
                $currentContent,
                1
            );
        } else {
            // Créer le tableau $policies
            $policiesArray = "\n    /**\n     * The policy mappings for the application.\n     *\n     * @var array<class-string, class-string>\n     */\n    protected \$policies = [{$policyEntry}\n    ];\n";

            $currentContent = preg_replace(
                '/(class\s+AuthServiceProvider\s+extends\s+ServiceProvider\s*\{)/',
                "$1{$policiesArray}",
                $currentContent,
                1
            );
        }

        // Écrire le contenu modifié
        File::put($authServiceProviderPath, $currentContent);

        $this->info('✓ UserPolicy enregistrée dans AuthServiceProvider.');
    }

    /**
     * Intègre le middleware AccountStatusMiddleware dans bootstrap/app.php
     */
    protected function integrateAccountStatusMiddleware()
    {
        $bootstrapPath = base_path('bootstrap/app.php');

        // Vérifier si le fichier existe
        if (!File::exists($bootstrapPath)) {
            $this->error('❌ Le fichier bootstrap/app.php est introuvable.');
            return;
        }

        // Lire le contenu actuel
        $currentContent = File::get($bootstrapPath);

        // Vérifier si le middleware est déjà intégré
        if (str_contains($currentContent, 'AccountStatusMiddleware')) {
            $this->warn('⚠️  Le middleware AccountStatusMiddleware est déjà intégré.');
            return;
        }

        // Ajouter l'alias du middleware
        $middlewareAlias = "\n        'account.status' => \\Maravel\\Http\\Middleware\\AccountStatusMiddleware::class,";

        // Chercher la section ->withMiddleware et ajouter l'alias
        if (preg_match('/->withMiddleware\(function\s*\(\s*Middleware\s+\$middleware\s*\)\s*\{/', $currentContent, $matches, PREG_OFFSET_CAPTURE)) {
            $insertPosition = $matches[0][1] + strlen($matches[0][0]);

            // Trouver la ligne suivante pour insérer après
            $afterMatch = substr($currentContent, $insertPosition);
            if (preg_match('/\n(\s*)/', $afterMatch, $indentMatch)) {
                $indent = $indentMatch[1];
                $middlewareCode = "\n{$indent}    // Middleware Maravel pour vérifier le statut du compte\n{$indent}    \$middleware->alias([{$middlewareAlias}\n{$indent}    ]);";

                $currentContent = substr_replace($currentContent, $middlewareCode, $insertPosition, 0);
            }
        } else {
            // Si la structure n'existe pas, afficher un avertissement
            $this->warn('⚠️  Impossible de trouver la section ->withMiddleware() dans bootstrap/app.php');
            $this->newLine();
            $this->comment('Veuillez ajouter manuellement le middleware suivant dans bootstrap/app.php :');
            $this->line("->withMiddleware(function (Middleware \$middleware) {");
            $this->line("    \$middleware->alias([{$middlewareAlias}");
            $this->line("    ]);");
            $this->line("})");
            return;
        }

        // Écrire le contenu modifié
        File::put($bootstrapPath, $currentContent);

        $this->info('✓ Middleware AccountStatusMiddleware intégré avec succès.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $bootstrapPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
    }
}
