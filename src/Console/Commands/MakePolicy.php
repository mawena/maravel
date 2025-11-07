<?php

namespace LaravelAdvancedApiController\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputArgument;

/**
 * Commande pour créer des policies avec Maravel
 *
 * Cette commande génère des policies qui étendent BasePolicy
 * avec un système de permissions avancé. Elle coexiste avec la commande
 * make:policy standard de Laravel.
 */
class MakePolicy extends GeneratorCommand
{
	/**
	 * Le nom et la signature de la commande
	 */
	protected $name = 'make:maravel.policy';

	/**
	 * La description de la commande
	 */
	protected $description = 'Créer une policy avec BasePolicy et système de permissions avancé';

	/**
	 * Le type de classe générée
	 */
	protected $type = 'Policy';

	/**
	 * Obtient le stub pour le générateur
	 */
	protected function getStub()
	{
		return __DIR__ . '/../../Stubs/advanced-policy.stub';
	}

	/**
	 * Obtient le namespace par défaut pour la classe
	 */
	protected function getDefaultNamespace($rootNamespace)
	{
		return $rootNamespace . '\Policies';
	}

	/**
	 * Obtient les arguments de la commande
	 */
	protected function getArguments()
	{
		return [
			['name', InputArgument::REQUIRED, 'Le nom de la policy'],
		];
	}

	/**
	 * Remplace le nom de classe dans le stub
	 */
	protected function replaceClass($stub, $name)
	{
		$stub = parent::replaceClass($stub, $name);

		$className = class_basename($name);
		$lowerName = strtolower($className);

		// Extraire le nom du modèle (enlever "Policy" à la fin)
		$modelName = Str::replaceLast('Policy', '', $className);
		$modelLower = strtolower($modelName);

		// Variable camelCase pour le modèle (ex: UserProfile -> userProfile)
		// Note: le stub contient déjà le $ devant {{ modelVariable }}
		$modelVariable = Str::camel($modelName);

		// Nom de classe User (par défaut)
		$userClass = 'User';

		return str_replace(
			[
				'{{ modelLower }}',
				'{{ lowerClass }}',
				'{{ model }}',
				'{{ modelVariable }}',
				'{{ user }}',
			],
			[
				$modelLower,
				$lowerName,
				$modelName,
				$modelVariable,
				$userClass,
			],
			$stub
		);
	}

	/**
	 * Exécute la commande
	 */
	public function handle()
	{
		$name = $this->qualifyClass($this->getNameInput());
		$path = $this->getPath($name);

		// Vérifier si le fichier existe déjà
		if ($this->alreadyExists($this->getNameInput())) {
			$this->error($this->type . ' already exists!');
			return false;
		}

		// Créer le répertoire s'il n'existe pas
		$this->makeDirectory($path);

		// Générer le fichier
		$this->files->put($path, $this->buildClass($name));

		$this->info($this->type . ' created successfully.');

		// Afficher des informations supplémentaires
		$this->line('');
		$this->comment('Policy créée avec les fonctionnalités suivantes :');
		$this->line('• Système de permissions avancé');
		$this->line('• Vérification des profils utilisateur');
		$this->line('• Support des règles d\'abilités');
		$this->line('• Méthodes de vérification personnalisées');
		$this->line('• Support des méthodes CRUD complètes');
		$this->line('');
		$this->comment('N\'oubliez pas de :');
		$this->line('1. Enregistrer la policy dans AuthServiceProvider');
		$this->line('2. Configurer les permissions dans votre modèle User');
		$this->line('3. Tester les permissions avec votre système d\'authentification');
		$this->line('4. Personnaliser les méthodes selon vos besoins métier');
	}
}
