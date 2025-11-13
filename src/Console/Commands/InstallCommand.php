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
        $this->call('install:api', ['--no-interaction' => true]);
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

        // Étape 5: Configurer le modèle User
        $this->info('🔧 Configuration du modèle User...');
        $this->configureUserModel();
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

        $this->info('✓ AuthController créé : app/Http/Controllers/API/AuthController.php');
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

        $this->info('✓ Fichier routes/api.php configuré avec les routes d\'authentification');
        $this->newLine();
        $this->comment('Routes disponibles :');
        $this->line('• POST /api/auth/login - Connexion');
        $this->line('• GET  /api/auth/data - Données utilisateur (authentifié)');
        $this->line('• DELETE /api/auth/logout - Déconnexion (authentifié)');
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

        $this->info('✓ Migration créée : ' . $migrationName);
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

        $this->info('✓ Modèle User configuré avec AuthenticatableBase');
        $this->newLine();
        $this->comment('Modifications apportées :');
        $this->line('• Héritage de AuthenticatableBase');
        $this->line('• Ajout du champ profile dans $fillable');
        $this->line('• Configuration des $enumCasts pour le profil');
        $this->line('• Ajout de la méthode getAbilityRulesAttribute()');
        $this->line('• Ajout de $appends = [\'ability_rules\']');
    }
}
