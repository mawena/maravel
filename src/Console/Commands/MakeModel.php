<?php

namespace Maravel\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

/**
 * Commande pour créer des modèles avec Maravel
 *
 * Cette commande génère des modèles qui étendent ModelBase
 * avec formatage automatique des données. Elle coexiste avec la commande
 * make:model standard de Laravel.
 */
class MakeModel extends GeneratorCommand
{
	/**
	 * Le nom et la signature de la commande
	 */
	protected $name = 'make:maravel.model';

	/**
	 * La description de la commande
	 */
	protected $description = 'Créer un modèle avec ModelBase et formatage automatique des données';

	/**
	 * Le type de classe générée
	 */
	protected $type = 'Model';

	/**
	 * Obtient le stub pour le générateur
	 */
	protected function getStub()
	{
		if ($this->option('authenticatable')) {
			return __DIR__ . '/../../Stubs/model.authenticatable.stub';
		}

		return __DIR__ . '/../../Stubs/model.api.stub';
	}

	/**
	 * Obtient le namespace par défaut pour la classe
	 */
	protected function getDefaultNamespace($rootNamespace)
	{
		return $rootNamespace . '\Models';
	}

	/**
	 * Obtient les arguments de la commande
	 */
	protected function getArguments()
	{
		return [
			['name', InputArgument::REQUIRED, 'Le nom du modèle'],
		];
	}

	/**
	 * Obtient les options de la commande
	 */
	protected function getOptions()
	{
		return [
			['migration', 'm', InputOption::VALUE_NONE, 'Créer une migration pour le modèle'],
			['controller', 'c', InputOption::VALUE_NONE, 'Créer un contrôleur API pour le modèle'],
			['policy', 'p', InputOption::VALUE_NONE, 'Créer une policy pour le modèle'],
			['authenticatable', 'a', InputOption::VALUE_NONE, 'Créer un modèle Authenticatable (pour User)'],
			['all', null, InputOption::VALUE_NONE, 'Créer migration, controller et policy'],
		];
	}

	/**
	 * Remplace le nom de classe dans le stub
	 */
	protected function replaceClass($stub, $name)
	{
		$stub = parent::replaceClass($stub, $name);

		$className = class_basename($name);

		// Nom en kebab-case (ex: UserProfile => user-profile)
		$lowerName = Str::kebab($className);

		// Nom en snake_case (ex: UserProfile => user_profile)
		$snakeName = Str::snake($className);

		// Nom en camelCase (ex: UserProfile => userProfile)
		$camelName = Str::camel($className);

		// Table name (pluriel en snake_case)
		$tableName = Str::snake(Str::pluralStudly($className));

		return str_replace(
			['{{ lowerClass }}', '{{ snakeClass }}', '{{ camelClass }}', '{{ table }}'],
			[$lowerName, $snakeName, $camelName, $tableName],
			$stub
		);
	}

	/**
	 * Exécute la commande
	 */
	public function handle()
	{
		// Appeler la méthode parent pour créer le modèle
		$result = parent::handle();

		// Si la création du modèle a échoué, on arrête
		if ($result === false) {
			return $result;
		}

		$modelName = $this->getNameInput();

		// Afficher le chemin du fichier créé (relatif à la racine du projet)
		$name = $this->qualifyClass($modelName);
		$path = $this->getPath($name);
		$relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $path);
		$this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');

		// Afficher des informations supplémentaires
		$this->line('');
		$this->comment('Modèle créé avec les fonctionnalités suivantes :');
		if ($this->option('authenticatable')) {
			$this->line('• Extension de AuthenticatableBase');
			$this->line('• Support de l\'authentification Laravel');
			$this->line('• Traits HasApiTokens, Notifiable');
		} else {
			$this->line('• Extension de ModelBase');
		}
		$this->line('• Formatage automatique des dates (created_at_fr, updated_at_fr)');
		$this->line('• Support des casts personnalisés (money, enum, boolean)');
		$this->line('• Méthodes utilitaires pour les relations');

		// Créer la migration si l'option -m ou --all est présente
		if ($this->option('migration') || $this->option('all')) {
			$this->createMigration($modelName);
		}

		// Créer le controller si l'option -c ou --all est présente
		if ($this->option('controller') || $this->option('all')) {
			$this->createController($modelName);
		}

		// Créer la policy si l'option -p ou --all est présente
		if ($this->option('policy') || $this->option('all')) {
			$this->createPolicy($modelName);
		}

		// Afficher les prochaines étapes
		$this->line('');
		$this->comment('N\'oubliez pas de :');
		$this->line('1. Configurer les $fillable dans le modèle');
		$this->line('2. Ajouter les relations Eloquent si nécessaire');
		$this->line('3. Configurer les casts personnalisés ($date_casts, $money_casts, etc.)');
		if (!$this->option('migration') && !$this->option('all')) {
			$this->line('4. Créer la migration avec: php artisan make:migration create_' . Str::snake(Str::pluralStudly($modelName)) . '_table');
		}

		return $result;
	}

	/**
	 * Crée une migration pour le modèle
	 */
	protected function createMigration($modelName)
	{
		$table = Str::snake(Str::pluralStudly($modelName));

		$this->info("Création de la migration pour la table {$table}...");

		$this->call('make:migration', [
			'name' => "create_{$table}_table",
			'--create' => $table,
		]);
	}

	/**
	 * Crée un contrôleur API pour le modèle
	 */
	protected function createController($modelName)
	{
		$this->info("Création du contrôleur API pour {$modelName}...");

		$this->call('make:maravel.controller', [
			'name' => "{$modelName}Controller",
		]);
	}

	/**
	 * Crée une policy pour le modèle
	 */
	protected function createPolicy($modelName)
	{
		$this->info("Création de la policy pour {$modelName}...");

		$this->call('make:maravel.policy', [
			'name' => "{$modelName}Policy",
		]);
	}
}
