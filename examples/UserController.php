<?php

namespace App\Http\Controllers\API;

use LaravelApiController\Http\Controllers\APIController;
use App\Models\User;
use Illuminate\Support\Str;

/**
 * Exemple d'utilisation de la librairie Laravel API Controller
 * 
 * Ce contrôleur démontre comment utiliser l'APIController
 * avec toutes ses fonctionnalités.
 */
class UserController extends APIController
{
	// Configuration du modèle
	protected string $modelClass = User::class;

	// Configuration des validations pour la création
	protected array $storeValidationArray = [
		'name' => 'required|string|max:255',
		'email' => 'required|email|unique:users',
		'password' => 'required|string|min:8',
		'age' => 'nullable|integer|min:0|max:120',
	];

	// Messages d'erreur personnalisés pour la création
	protected array $storeValidationTextArray = [
		'name.required' => 'Le nom est obligatoire',
		'name.max' => 'Le nom ne peut pas dépasser 255 caractères',
		'email.required' => 'L\'email est obligatoire',
		'email.email' => 'L\'email doit être valide',
		'email.unique' => 'Cet email est déjà utilisé',
		'password.required' => 'Le mot de passe est obligatoire',
		'password.min' => 'Le mot de passe doit contenir au moins 8 caractères',
		'age.integer' => 'L\'âge doit être un nombre entier',
		'age.min' => 'L\'âge ne peut pas être négatif',
		'age.max' => 'L\'âge ne peut pas dépasser 120 ans',
	];

	// Messages d'erreur pour la mise à jour
	protected array $updateValidationTextArray = [
		'name.required' => 'Le nom est obligatoire',
		'email.email' => 'L\'email doit être valide',
		'password.min' => 'Le mot de passe doit contenir au moins 8 caractères',
	];

	// Configuration des autorisations
	protected string|null $indexAbilityName = "viewAny";
	protected string|null $showAbilityName = "view";
	protected string|null $storeAuthName = "create";
	protected string|null $updateAuthName = "update";
	protected string|null $destroyAuthName = "delete";

	// Champs de recherche pour la méthode index
	protected array $indexSearchFieldList = ['name', 'email'];

	// Relations à charger après création
	protected array $storeRelationArray = ['profile'];

	// Relations à charger après mise à jour
	protected array $updateRelationArray = ['profile'];

	/**
	 * Fonction de validation manuelle pour la création
	 * Permet d'ajouter des validations personnalisées
	 */
	protected $storeManualValidationsFunction = function ($requestData) {
			// Vérification de l'âge minimum pour certains rôles
			if (isset($requestData['role']) && $requestData['role'] === 'admin' && $requestData['age'] < 18) {
				return [
					'errors' => ['age' => ['Les administrateurs doivent avoir au moins 18 ans']],
					'status' => 400
				];
			}

			// Données supplémentaires à retourner
			return [
				'data' => [
					'registration_ip' => request()->ip(),
					'user_agent' => request()->userAgent(),
				]
			];
		};

	/**
	 * Fonction exécutée avant la création
	 * Permet de modifier les données avant l'insertion
	 */
	protected $storeBeforeCreateFunction = function ($requestData, $manualValidationsData) {
			// Génération d'un slug unique
			$requestData['slug'] = Str::slug($requestData['name']);

			// Hachage du mot de passe
			if (isset($requestData['password'])) {
				$requestData['password'] = bcrypt($requestData['password']);
			}

			// Ajout des données de validation manuelle
			if (isset($manualValidationsData['registration_ip'])) {
				$requestData['registration_ip'] = $manualValidationsData['registration_ip'];
			}

			return $requestData;
		};

	/**
	 * Fonction exécutée après la création
	 * Permet d'effectuer des actions post-création
	 */
	protected $storeAfterCreateFunction = function ($model, $requestData, $manualValidationsData) {
			// Envoi d'un email de bienvenue
			// Mail::to($model->email)->send(new WelcomeEmail($model));
	
			// Création d'un profil par défaut
			$model->profile()->create([
				'bio' => 'Nouvel utilisateur',
				'avatar' => 'default-avatar.png',
			]);

			return $model;
		};

	/**
	 * Fonction qui retourne les règles de validation pour la mise à jour
	 * Permet d'avoir des règles différentes selon l'ID
	 */
	protected $updateGetValidationArrayFunction = function ($id) {
			return [
				'name' => 'required|string|max:255',
				'email' => 'required|email|unique:users,email,' . $id,
				'password' => 'nullable|string|min:8',
				'age' => 'nullable|integer|min:0|max:120',
			];
		};

	/**
	 * Fonction de validation manuelle pour la mise à jour
	 */
	protected $updateManualValidationsFunction = function ($requestData, $model) {
			// Vérification que l'utilisateur ne peut pas se supprimer lui-même
			if (isset($requestData['status']) && $requestData['status'] === 'inactive' && $model->id === auth()->id()) {
				return [
					'errors' => ['status' => ['Vous ne pouvez pas vous désactiver vous-même']],
					'status' => 400
				];
			}

			return ['data' => ['updated_by' => auth()->id()]];
		};

	/**
	 * Fonction exécutée avant la mise à jour
	 */
	protected $updateBeforeUpdateFunction = function ($model, $requestData, $manualValidationsData) {
			// Sauvegarde de l'ancien email pour l'historique
			$requestData['previous_email'] = $model->email;

			// Hachage du nouveau mot de passe si fourni
			if (isset($requestData['password'])) {
				$requestData['password'] = bcrypt($requestData['password']);
			}

			return $requestData;
		};

	/**
	 * Fonction exécutée après la mise à jour
	 */
	protected $updateAfterUpdateFunction = function ($model, $requestData, $manualValidationsData) {
			// Envoi d'un email si l'email a changé
			if (isset($requestData['previous_email']) && $requestData['previous_email'] !== $model->email) {
				// Mail::to($requestData['previous_email'])->send(new EmailChangedNotification($model));
			}

			return $model;
		};

	/**
	 * Fonction exécutée avant la suppression
	 */
	protected $deleteBeforeDeleteFunction = function ($model) {
			// Sauvegarde des données importantes avant suppression
			// Log::info('Suppression de l\'utilisateur', ['user_id' => $model->id, 'email' => $model->email]);
	
			// Suppression des relations
			$model->profile()->delete();
			$model->posts()->delete();
		};

	/**
	 * Fonction exécutée après la suppression
	 */
	protected $deleteAfterDeleteFunction = function ($model) {
			// Nettoyage des fichiers
			// Storage::delete($model->avatar);
	
			return $model;
		};

	/**
	 * Filtrage personnalisé pour la méthode index
	 * Permet d'ajouter des filtres basés sur l'utilisateur connecté
	 */
	protected $indexManualFilter = function ($query, $user, $requestData) {
			// Les utilisateurs non-admin ne voient que leurs propres données
			if (!$user->hasRole('admin')) {
				$query->where('id', $user->id);
			}

			// Filtre par statut si l'utilisateur n'est pas admin
			if (!$user->hasRole('admin') && isset($requestData['status'])) {
				$query->where('status', 'active');
			}

			return $query;
		};
}
