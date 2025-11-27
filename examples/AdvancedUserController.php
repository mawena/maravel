<?php

namespace App\Http\Controllers\API;

use Maravel\Http\Controllers\APIController;
use App\Models\User;
use Illuminate\Support\Str;

/**
 * Exemple d'utilisation avancée de la librairie Laravel Advanced API Controller v2
 * 
 * Ce contrôleur démontre toutes les nouvelles fonctionnalités :
 * - Système de permissions avancé
 * - Modèles enrichis avec ModelBase
 * - Policies automatiques
 * - Hooks personnalisés
 */
class AdvancedUserController extends APIController
{
	// Configuration du modèle
	protected string $modelClass = User::class;

	// Configuration des validations pour la création
	protected array $storeValidationArray = [
		'first_name' => 'required|string|max:255',
		'last_name' => 'required|string|max:255',
		'email' => 'required|email|unique:users',
		'password' => 'required|string|min:8',
		'profile' => 'required|in:admin,client',
		'balance' => 'nullable|numeric|min:0',
		'is_active' => 'nullable|boolean',
	];

	// Messages d'erreur personnalisés pour la création
	protected array $storeValidationTextArray = [
		'first_name.required' => 'Le prénom est obligatoire',
		'last_name.required' => 'Le nom est obligatoire',
		'email.required' => 'L\'email est obligatoire',
		'email.email' => 'L\'email doit être valide',
		'email.unique' => 'Cet email est déjà utilisé',
		'password.required' => 'Le mot de passe est obligatoire',
		'password.min' => 'Le mot de passe doit contenir au moins 8 caractères',
		'profile.required' => 'Le profil est obligatoire',
		'profile.in' => 'Le profil doit être admin ou client',
		'balance.numeric' => 'Le solde doit être un nombre',
		'balance.min' => 'Le solde ne peut pas être négatif',
	];

	// Configuration des autorisations avec le nouveau système
	protected string|null $indexAbilityName = "viewAny";
	protected string|null $showAbilityName = "view";
	protected string|null $storeAuthName = "create";
	protected string|null $updateAuthName = "update";
	protected string|null $destroyAuthName = "delete";

	// Champs de recherche pour la méthode index
	protected array $indexSearchFieldList = ['first_name', 'last_name', 'email'];

	// Relations à charger après création
	protected array $storeRelationArray = ['referrals', 'investments'];

	// Relations à charger après mise à jour
	protected array $updateRelationArray = ['referrals', 'investments'];

	/**
	 * Validation manuelle pour la création avec système de permissions
	 */
	protected $storeManualValidationsFunction = function ($requestData) {
			// Vérification des permissions spéciales pour les administrateurs
			if (isset($requestData['profile']) && $requestData['profile'] === 'admin') {
				// Seuls les super-administrateurs peuvent créer des administrateurs
				$connectedUser = auth()->user();
				if (!$connectedUser || $connectedUser->profile !== 'admin') {
					return [
						'errors' => ['profile' => ['Seuls les administrateurs peuvent créer des administrateurs']],
						'status' => 403
					];
				}
			}

			// Vérification du solde initial
			if (isset($requestData['balance']) && $requestData['balance'] > 1000000) {
				return [
					'errors' => ['balance' => ['Le solde initial ne peut pas dépasser 1,000,000']],
					'status' => 400
				];
			}

			// Données supplémentaires pour l'audit
			return [
				'data' => [
					'created_by' => auth()->id(),
					'created_ip' => request()->ip(),
					'user_agent' => request()->userAgent(),
				]
			];
		};

	/**
	 * Fonction exécutée avant la création avec formatage automatique
	 */
	protected $storeBeforeCreateFunction = function ($requestData, $manualValidationsData) {
			// Génération automatique du code de référence
			$requestData['referral_code'] = strtoupper(
				substr($requestData['first_name'], 0, 2) .
				substr($requestData['last_name'], 0, 2) .
				'-' .
				str_pad(rand(1000, 9999), 4, '0', STR_PAD_LEFT)
			);

			// Hachage du mot de passe
			if (isset($requestData['password'])) {
				$requestData['password'] = bcrypt($requestData['password']);
			}

			// Formatage automatique des noms
			$requestData['first_name'] = ucfirst(strtolower($requestData['first_name']));
			$requestData['last_name'] = strtoupper($requestData['last_name']);

			// Ajout des données d'audit
			if (isset($manualValidationsData['created_by'])) {
				$requestData['created_by'] = $manualValidationsData['created_by'];
			}

			return $requestData;
		};

	/**
	 * Fonction exécutée après la création avec statistiques
	 */
	protected $storeAfterCreateFunction = function ($model, $requestData, $manualValidationsData) {
			// Génération des statistiques initiales
			$model->investment_statistique();
			$model->question_statistique();
			$model->nb_referrals();

			// Envoi d'un email de bienvenue (simulé)
			// Mail::to($model->email)->send(new WelcomeEmail($model));
	
			// Création d'un profil par défaut si nécessaire
			if ($model->profile === 'client') {
				// Logique spécifique aux clients
				$model->update(['is_premium' => false]);
			}

			return $model;
		};

	/**
	 * Fonction qui retourne les règles de validation pour la mise à jour
	 */
	protected $updateGetValidationArrayFunction = function ($id) {
			return [
				'first_name' => 'required|string|max:255',
				'last_name' => 'required|string|max:255',
				'email' => 'required|email|unique:users,email,' . $id,
				'password' => 'nullable|string|min:8',
				'profile' => 'required|in:admin,client',
				'balance' => 'nullable|numeric|min:0',
				'is_active' => 'nullable|boolean',
			];
		};

	/**
	 * Validation manuelle pour la mise à jour avec permissions
	 */
	protected $updateManualValidationsFunction = function ($requestData, $model) {
			$connectedUser = auth()->user();

			// Vérification que l'utilisateur ne peut pas se supprimer lui-même
			if (isset($requestData['is_active']) && $requestData['is_active'] === false && $model->id === $connectedUser->id) {
				return [
					'errors' => ['is_active' => ['Vous ne pouvez pas vous désactiver vous-même']],
					'status' => 400
				];
			}

			// Vérification des permissions pour changer le profil
			if (isset($requestData['profile']) && $requestData['profile'] !== $model->profile) {
				if (!$this->isAdmin($connectedUser)) {
					return [
						'errors' => ['profile' => ['Seuls les administrateurs peuvent changer les profils']],
						'status' => 403
					];
				}
			}

			return ['data' => ['updated_by' => $connectedUser->id]];
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

			// Formatage automatique des noms
			if (isset($requestData['first_name'])) {
				$requestData['first_name'] = ucfirst(strtolower($requestData['first_name']));
			}
			if (isset($requestData['last_name'])) {
				$requestData['last_name'] = strtoupper($requestData['last_name']);
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

			// Mise à jour des statistiques
			$model->investment_statistique();
			$model->question_statistique();

			return $model;
		};

	/**
	 * Fonction exécutée avant la suppression
	 */
	protected $deleteBeforeDeleteFunction = function ($model) {
			// Sauvegarde des données importantes avant suppression
			// Log::info('Suppression de l\'utilisateur', [
			//     'user_id' => $model->id, 
			//     'email' => $model->email,
			//     'deleted_by' => auth()->id()
			// ]);
	
			// Suppression des relations
			$model->referrals()->update(['referrer_id' => null]);
			$model->investments()->delete();
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
	 * Filtrage personnalisé avec système de permissions
	 */
	protected $indexManualFilter = function ($query, $user, $requestData) {
			// Les utilisateurs non-admin ne voient que leurs propres données
			if (!$this->isAdmin($user)) {
				$query->where('id', $user->id);
			}

			// Filtre par statut si l'utilisateur n'est pas admin
			if (!$this->isAdmin($user) && isset($requestData['is_active'])) {
				$query->where('is_active', true);
			}

			// Filtre par profil si l'utilisateur n'est pas admin
			if (!$this->isAdmin($user) && isset($requestData['profile'])) {
				$query->where('profile', 'client');
			}

			return $query;
		};
}
