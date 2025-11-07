<?php

namespace Maravel\Policies;

use Maravel\Http\Traits\PermissionCheckerTrait;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Model;

/**
 * Classe de base pour toutes les policies
 * 
 * Cette classe fournit un système de permissions avancé basé sur
 * les profils utilisateur et les règles d'abilités.
 */
class BasePolicy
{
	use PermissionCheckerTrait;

	/**
	 * Nom du modèle pour les permissions
	 * À définir dans chaque policy fille
	 */
	protected $modelName = "";

	/**
	 * Méthode appelée avant toutes les autres vérifications
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param string $ability Action demandée
	 * @return Response|null
	 */
	public function before($connectedUser, string $ability)
	{
		// Les administrateurs ont tous les droits
		if ($this->isAdmin($connectedUser)) {
			return Response::allow();
		}

		// Vérification des permissions globales "manage"
		foreach ($connectedUser->ability_rules as $ability_rule) {
			if ($ability_rule["subject"] == "all" && in_array("manage", $ability_rule["action"])) {
				return Response::allow();
			}
		}

		// Retourne null pour continuer avec les vérifications spécifiques
		return null;
	}

	/**
	 * Vérifie si l'utilisateur peut voir tous les modèles
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @return Response
	 */
	public function viewAny($connectedUser)
	{
		$canView = $this->check(["read", "historical"], $this->modelName, $connectedUser);

		return $canView
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut voir un modèle spécifique
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model $model Modèle à vérifier
	 * @return Response
	 */
	public function view($connectedUser, Model $model)
	{
		$canView = $this->check(["read"], $this->modelName, $connectedUser);

		return $canView
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut créer des modèles
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @return Response
	 */
	public function create($connectedUser)
	{
		$canCreate = $this->check(["create"], $this->modelName, $connectedUser);

		return $canCreate
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut modifier un modèle
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model $model Modèle à vérifier
	 * @return Response
	 */
	public function update($connectedUser, Model $model)
	{
		$canUpdate = $this->check(["update"], $this->modelName, $connectedUser);

		return $canUpdate
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut supprimer un modèle
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model $model Modèle à vérifier
	 * @return Response
	 */
	public function delete($connectedUser, Model $model)
	{
		$canDelete = $this->check(["delete"], $this->modelName, $connectedUser);

		return $canDelete
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut restaurer un modèle
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model $model Modèle à vérifier
	 * @return Response
	 */
	public function restore($connectedUser, Model $model)
	{
		$canRestore = $this->check(["restore", "manage"], $this->modelName, $connectedUser);

		return $canRestore
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Vérifie si l'utilisateur peut supprimer définitivement un modèle
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model $model Modèle à vérifier
	 * @return Response
	 */
	public function forceDelete($connectedUser, Model $model)
	{
		$canForceDelete = $this->check(["forceDelete", "manage"], $this->modelName, $connectedUser);

		return $canForceDelete
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}

	/**
	 * Méthode pour vérifier des permissions personnalisées
	 * 
	 * @param string $action Action à vérifier
	 * @param object $connectedUser Utilisateur connecté
	 * @param Model|null $model Modèle optionnel
	 * @return Response
	 */
	public function checkCustomPermission($action, $connectedUser, Model $model = null)
	{
		$canPerform = $this->check([$action], $this->modelName, $connectedUser);

		return $canPerform
			? Response::allow()
			: Response::deny("Vous n'êtes pas autorisé à effectuer cette action");
	}
}
