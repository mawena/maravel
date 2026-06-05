<?php

namespace Maravel\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Symfony\Component\Console\Input\InputArgument;

/**
 * Commande pour créer des contrôleurs API avec Maravel
 *
 * Cette commande génère des contrôleurs qui étendent APIController
 * avec un système de gestion avancé. Elle coexiste avec la commande
 * make:controller standard de Laravel.
 */
class MakeController extends GeneratorCommand
{
	/**
	 * Le nom et la signature de la commande
	 */
	protected $name = 'make:maravel.controller';

	/**
	 * La description de la commande
	 */
	protected $description = 'Créer un contrôleur API avec APIController et système de gestion REST avancé';

	/**
	 * Le type de classe générée
	 */
	protected $type = 'Controller';

	/**
	 * Obtient le stub pour le générateur
	 */
	protected function getStub()
	{
		return __DIR__ . '/../../Stubs/advanced-controller.stub';
	}

	/**
	 * Obtient le namespace par défaut pour la classe
	 */
	protected function getDefaultNamespace($rootNamespace)
	{
		return $rootNamespace . '\Http\Controllers\API';
	}

	/**
	 * Obtient les arguments de la commande
	 */
	protected function getArguments()
	{
		return [
			['name', InputArgument::REQUIRED, 'Le nom du contrôleur'],
		];
	}

	/**
	 * Obtient le nom d'entrée avec le suffixe Controller si nécessaire
	 */
	protected function getNameInput()
	{
		$name = parent::getNameInput();

		// Ajoute "Controller" si ce n'est pas déjà présent
		return str_ends_with($name, 'Controller') ? $name : $name . 'Controller';
	}

	/**
	 * Remplace le nom de classe dans le stub
	 */
	protected function replaceClass($stub, $name)
	{
		$stub = parent::replaceClass($stub, $name);

		// Récupérer le nom brut sans le suffixe "Controller"
		$baseName = str_replace('Controller', '', class_basename($name));

		// Remplacer le placeholder personnalisé
		return str_replace('{{ baseName }}', $baseName, $stub);
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

		// Afficher le chemin du fichier créé (relatif à la racine du projet)
		$relativePath = str_replace(base_path() . DIRECTORY_SEPARATOR, '', $path);
		$this->line('  <fg=green>' . str_replace('\\', '/', $relativePath) . '</>');

		// Afficher des informations supplémentaires
		$this->line('');
		$this->comment('Contrôleur créé avec les fonctionnalités suivantes :');
		$this->line('• Système de gestion REST complet (CRUD)');
		$this->line('• Gestion automatique des relations');
		$this->line('• Système de validation avancé');
		$this->line('• Support de la pagination et des filtres');
		$this->line('• Documentation API automatique');
		$this->line('');
		$this->comment('N\'oubliez pas de :');
		$this->line('1. Ajouter les routes dans api.php');
		$this->line('2. Configurer les relations dans le modèle');
		$this->line('3. Définir les règles de validation');
		$this->line('4. Tester les endpoints avec votre client API');
	}
}
