<?php

namespace Maravel\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Maravel\Services\FileMerger;

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

        // Étape 4: Créer les migrations RBAC (rôles & permissions dynamiques)
        $this->info('🧩 Création des migrations RBAC (rôles & permissions)...');
        $this->createRbacMigrations();
        $this->newLine();

        // Étape 4b: Créer la migration pour le statut du compte
        $this->info('🔒 Création de la migration pour le statut du compte...');
        $this->createAccountStatusMigration();
        $this->newLine();

        // Étape 5: Configurer le modèle User
        $this->info('🔧 Configuration du modèle User...');
        $this->configureUserModel();
        $this->newLine();

        // Étape 5b: Créer les modèles Role et Permission
        $this->info('🗂️  Création des modèles Role et Permission...');
        $this->createRbacModels();
        $this->newLine();

        // Étape 5c: Créer le contrôleur UserController
        $this->info('👥 Création du contrôleur des utilisateurs...');
        $this->createUserController();
        $this->newLine();

        // Étape 5d: Créer les contrôleurs RoleController et PermissionController
        $this->info('🎛️  Création des contrôleurs Role et Permission...');
        $this->createRbacControllers();
        $this->newLine();

        // Étape 5e: Créer les policies (User, Role, Permission)
        $this->info('🔐 Création des policies...');
        $this->createUserPolicy();
        $this->createRbacPolicies();
        $this->newLine();

        // Étape 5f: Créer le seeder RolePermissionSeeder
        $this->info('🌱 Création du seeder RBAC...');
        $this->createRolePermissionSeeder();
        $this->newLine();

        // Étape 5g: Intégrer le middleware AccountStatusMiddleware
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
        $this->line('2. Initialisez les rôles/permissions : php artisan db:seed --class=RolePermissionSeeder');
        $this->line('3. Assignez un rôle à un utilisateur : $user->assignRole(\'admin\');');
        $this->line('4. Testez l\'authentification via les endpoints API');
        $this->line('5. Consultez la documentation : https://github.com/mawena/maravel');
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

        // Charger le stub des routes
        $stubPath = __DIR__ . '/../../Stubs/api-routes.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub api-routes.stub est introuvable.');
            return;
        }

        // Lire les contenus
        $currentContent = File::get($routesPath);
        $stubContent = File::get($stubPath);

        // Vérifier si les routes d'authentification existent déjà
        $hasAuthController = str_contains($currentContent, 'AuthController');
        $hasUserController = str_contains($currentContent, 'UserController');

        if ($hasAuthController && $hasUserController) {
            // Les routes existent déjà, on fusionne uniquement les use statements
            $fileMerger = new FileMerger();
            $mergedContent = $fileMerger->mergeApiRoutes($currentContent, $stubContent);
            File::put($routesPath, $mergedContent);

            $this->info('✓ Fichier routes/api.php mis à jour (fusion des use statements).');
            $this->comment('  Les routes existantes ont été conservées.');
        } else {
            // Utiliser le stub complet (priorité à la librairie)
            File::put($routesPath, $stubContent);
            $this->info('✓ Fichier routes/api.php configuré avec succès.');
        }

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
        $this->line('• GET    /api/roles - Liste des rôles');
        $this->line('• POST   /api/roles - Créer un rôle (+ permissions)');
        $this->line('• GET    /api/roles/{id} - Voir un rôle');
        $this->line('• PUT    /api/roles/{id} - Modifier un rôle (+ permissions)');
        $this->line('• DELETE /api/roles/{id} - Supprimer un rôle');
        $this->line('• GET    /api/permissions - Liste des permissions');
        $this->line('• POST   /api/permissions - Créer une permission (action + sujet)');
        $this->line('• GET    /api/permissions/{id} - Voir une permission');
        $this->line('• PUT    /api/permissions/{id} - Modifier une permission');
        $this->line('• DELETE /api/permissions/{id} - Supprimer une permission');
    }

    /**
     * Crée les migrations du système RBAC (rôles & permissions dynamiques).
     *
     * Ordre important : permissions et roles d'abord, puis les pivots
     * (permission_role, role_user), puis la suppression de l'ancien champ profile.
     */
    protected function createRbacMigrations()
    {
        // [stub => suffixe du nom de fichier], dans l'ordre d'exécution voulu.
        $migrations = [
            'migration.create_permissions_table.stub' => 'create_permissions_table',
            'migration.create_roles_table.stub' => 'create_roles_table',
            'migration.create_permission_role_table.stub' => 'create_permission_role_table',
            'migration.create_role_user_table.stub' => 'create_role_user_table',
            'migration.drop_profile_from_users.stub' => 'drop_profile_from_users_table',
        ];

        $offset = 0;
        foreach ($migrations as $stub => $suffix) {
            // Timestamps croissants pour garantir l'ordre d'exécution.
            $timestamp = date('Y_m_d_His', time() + $offset);
            $offset++;

            $migrationPath = database_path("migrations/{$timestamp}_{$suffix}.php");

            // Éviter les doublons si une migration identique existe déjà.
            $existing = File::glob(database_path("migrations/*_{$suffix}.php"));
            if (!empty($existing)) {
                $this->warn("⚠️  Migration {$suffix} déjà présente, ignorée.");
                continue;
            }

            $stubPath = __DIR__ . '/../../Stubs/' . $stub;
            if (!File::exists($stubPath)) {
                $this->error("❌ Le fichier stub {$stub} est introuvable.");
                continue;
            }

            File::copy($stubPath, $migrationPath);

            $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $migrationPath);
            $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        }

        $this->info('✓ Migrations RBAC créées avec succès.');
    }

    /**
     * Crée les modèles App\Models\Role et App\Models\Permission.
     */
    protected function createRbacModels()
    {
        $models = [
            'Role' => 'role-model.stub',
            'Permission' => 'permission-model.stub',
        ];

        $targetDir = app_path('Models');
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        foreach ($models as $name => $stub) {
            $targetPath = $targetDir . "/{$name}.php";

            if (File::exists($targetPath)) {
                $this->warn("⚠️  Le modèle {$name} existe déjà, ignoré.");
                continue;
            }

            $stubPath = __DIR__ . '/../../Stubs/' . $stub;
            if (!File::exists($stubPath)) {
                $this->error("❌ Le fichier stub {$stub} est introuvable.");
                continue;
            }

            File::copy($stubPath, $targetPath);
            $this->info("✓ Modèle {$name} créé.");
            $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
            $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        }
    }

    /**
     * Crée les contrôleurs RoleController et PermissionController.
     */
    protected function createRbacControllers()
    {
        $controllers = [
            'RoleController' => 'role-controller.stub',
            'PermissionController' => 'permission-controller.stub',
        ];

        $targetDir = app_path('Http/Controllers/API');
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        foreach ($controllers as $name => $stub) {
            $targetPath = $targetDir . "/{$name}.php";

            if (File::exists($targetPath)) {
                $this->warn("⚠️  Le contrôleur {$name} existe déjà, ignoré.");
                continue;
            }

            $stubPath = __DIR__ . '/../../Stubs/' . $stub;
            if (!File::exists($stubPath)) {
                $this->error("❌ Le fichier stub {$stub} est introuvable.");
                continue;
            }

            File::copy($stubPath, $targetPath);
            $this->info("✓ Contrôleur {$name} créé.");
            $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
            $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        }
    }

    /**
     * Crée les policies RolePolicy et PermissionPolicy et les enregistre.
     */
    protected function createRbacPolicies()
    {
        $policies = [
            'RolePolicy' => ['stub' => 'role-policy.stub', 'model' => 'Role'],
            'PermissionPolicy' => ['stub' => 'permission-policy.stub', 'model' => 'Permission'],
        ];

        $targetDir = app_path('Policies');
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        foreach ($policies as $name => $info) {
            $targetPath = $targetDir . "/{$name}.php";

            if (File::exists($targetPath)) {
                $this->warn("⚠️  La policy {$name} existe déjà, ignorée.");
            } else {
                $stubPath = __DIR__ . '/../../Stubs/' . $info['stub'];
                if (!File::exists($stubPath)) {
                    $this->error("❌ Le fichier stub {$info['stub']} est introuvable.");
                    continue;
                }

                File::copy($stubPath, $targetPath);
                $this->info("✓ Policy {$name} créée.");
                $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
                $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
            }

            // Enregistrer la policy dans AuthServiceProvider (si présent).
            $this->registerPolicyInAuthServiceProvider($info['model'], $name);
        }
    }

    /**
     * Crée le seeder RolePermissionSeeder.
     */
    protected function createRolePermissionSeeder()
    {
        $targetDir = database_path('seeders');
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        $targetPath = $targetDir . '/RolePermissionSeeder.php';

        if (File::exists($targetPath)) {
            $this->warn('⚠️  Le seeder RolePermissionSeeder existe déjà, ignoré.');
            return;
        }

        $stubPath = __DIR__ . '/../../Stubs/seeder.role_permission.stub';
        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub seeder.role_permission.stub est introuvable.');
            return;
        }

        File::copy($stubPath, $targetPath);
        $this->info('✓ Seeder RolePermissionSeeder créé.');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        $this->comment('  Lancez-le avec : php artisan db:seed --class=RolePermissionSeeder');
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

        // Charger le stub du modèle User
        $stubPath = __DIR__ . '/../../Stubs/user-model.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-model.stub est introuvable.');
            return;
        }

        // Lire les contenus
        $currentContent = File::get($userModelPath);
        $stubContent = File::get($stubPath);

        // Fusionner les contenus
        $fileMerger = new FileMerger();
        $mergedContent = $fileMerger->mergeUserModel($currentContent, $stubContent);

        // Écrire le contenu fusionné
        File::put($userModelPath, $mergedContent);

        $this->info('✓ Modèle User configuré avec succès (fusion intelligente).');
        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $userModelPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');
        $this->newLine();
        $this->comment('Modifications apportées :');
        $this->line('• Fusion des use statements');
        $this->line('• Héritage de AuthenticatableBase (priorité librairie)');
        $this->line('• Fusion des traits existants (dont HasRoles via AuthenticatableBase)');
        $this->line('• Ajout des champs activated, password_change_required dans $fillable');
        $this->line('• Configuration des $enumCasts (libellés lisibles)');
        $this->line('• ability_rules est désormais calculé dynamiquement depuis les rôles (RBAC)');
        $this->line('• Ajout de $appends = [\'ability_rules\'] (consommé par CASL côté frontend)');
        $this->line('• Conservation de vos méthodes et propriétés existantes');
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

        // Créer le répertoire s'il n'existe pas
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        // Charger le stub
        $stubPath = __DIR__ . '/../../Stubs/user-controller.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-controller.stub est introuvable.');
            return;
        }

        $stubContent = File::get($stubPath);

        // Vérifier si le contrôleur existe déjà
        if (File::exists($targetPath)) {
            // Fusionner avec l'existant
            $currentContent = File::get($targetPath);
            $fileMerger = new FileMerger();
            $mergedContent = $fileMerger->mergeUserController($currentContent, $stubContent);
            File::put($targetPath, $mergedContent);

            $this->info('✓ UserController fusionné avec succès.');
            $this->comment('  Les méthodes de la librairie ont été ajoutées/mises à jour.');
            $this->comment('  Vos méthodes personnalisées ont été conservées.');
        } else {
            // Créer le fichier
            File::put($targetPath, $stubContent);
            $this->info('✓ UserController créé avec succès.');
        }

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

        // Créer le répertoire s'il n'existe pas
        if (!File::isDirectory($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        // Charger le stub
        $stubPath = __DIR__ . '/../../Stubs/user-policy.stub';

        if (!File::exists($stubPath)) {
            $this->error('❌ Le fichier stub user-policy.stub est introuvable.');
            return;
        }

        $stubContent = File::get($stubPath);

        // Vérifier si la policy existe déjà
        if (File::exists($targetPath)) {
            // Fusionner avec l'existant
            $currentContent = File::get($targetPath);
            $fileMerger = new FileMerger();
            $mergedContent = $fileMerger->mergeUserPolicy($currentContent, $stubContent);
            File::put($targetPath, $mergedContent);

            $this->info('✓ UserPolicy fusionnée avec succès.');
            $this->comment('  Les méthodes de la librairie ont été ajoutées/mises à jour.');
            $this->comment('  Vos méthodes personnalisées ont été conservées.');
        } else {
            // Créer le fichier
            File::put($targetPath, $stubContent);
            $this->info('✓ UserPolicy créée avec succès.');
        }

        $relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $targetPath);
        $this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');

        // Enregistrer la policy dans AuthServiceProvider si nécessaire
        $this->registerPolicyInAuthServiceProvider();
    }

    /**
     * Enregistre une policy dans AuthServiceProvider si celui-ci existe.
     *
     * @param string $model  Nom court du modèle (ex: "User", "Role").
     * @param string $policy Nom court de la policy (ex: "UserPolicy").
     */
    protected function registerPolicyInAuthServiceProvider($model = 'User', $policy = 'UserPolicy')
    {
        $authServiceProviderPath = app_path('Providers/AuthServiceProvider.php');

        // Vérifier si AuthServiceProvider existe
        if (!File::exists($authServiceProviderPath)) {
            $this->comment("ℹ️  AuthServiceProvider non trouvé. La policy {$policy} sera découverte automatiquement.");
            return;
        }

        // Lire le contenu actuel
        $currentContent = File::get($authServiceProviderPath);

        // Vérifier si la policy est déjà enregistrée
        if (str_contains($currentContent, "{$model}::class => {$policy}::class")) {
            $this->comment("ℹ️  {$policy} déjà enregistrée dans AuthServiceProvider.");
            return;
        }

        // Ajouter l'import du modèle
        if (!str_contains($currentContent, "use App\\Models\\{$model};")) {
            $currentContent = preg_replace(
                '/(namespace App\\\\Providers;)/',
                "$1\n\nuse App\\Models\\{$model};",
                $currentContent
            );
        }

        // Ajouter l'import de la policy
        if (!str_contains($currentContent, "use App\\Policies\\{$policy};")) {
            $currentContent = preg_replace(
                '/(namespace App\\\\Providers;)/',
                "$1\n\nuse App\\Policies\\{$policy};",
                $currentContent
            );
        }

        // Ajouter la policy dans le tableau $policies
        $policyEntry = "\n        {$model}::class => {$policy}::class,";

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

        $this->info("✓ {$policy} enregistrée dans AuthServiceProvider.");
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
