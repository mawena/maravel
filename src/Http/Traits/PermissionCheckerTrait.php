<?php

namespace LaravelAdvancedApiController\Http\Traits;

/**
 * Trait pour la vérification des permissions
 * 
 * Ce trait fournit des méthodes pour vérifier les permissions
 * basées sur un système de règles d'abilités.
 */
trait PermissionCheckerTrait
{
	/**
	 * Vérifie si l'utilisateur a les permissions nécessaires
	 * 
	 * @param array $actions Actions à vérifier (ex: ['read', 'create'])
	 * @param string $subject Sujet de la permission (ex: 'user', 'post')
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function check($actions, $subject, $connectedUser)
	{
		// Vérification si l'utilisateur a des règles d'abilités
		if (!isset($connectedUser->ability_rules) || !is_array($connectedUser->ability_rules)) {
			return false;
		}

		foreach ($connectedUser->ability_rules as $rules) {
			// Vérification du sujet (all = tous les sujets)
			if (in_array($subject, $rules["subject"]) || in_array("all", $rules["subject"])) {
				// Vérification si l'utilisateur a la permission "manage" (toutes les actions)
				if (in_array("manage", $rules["action"])) {
					return true;
				}

				// Vérification des actions spécifiques
				foreach ($actions as $action) {
					if (in_array($action, $rules["action"])) {
						return true;
					}
				}
			}
		}

		return false;
	}

	/**
	 * Vérifie si l'utilisateur peut lire
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canRead($subject, $connectedUser)
	{
		return $this->check(['read'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur peut créer
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canCreate($subject, $connectedUser)
	{
		return $this->check(['create'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur peut modifier
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canUpdate($subject, $connectedUser)
	{
		return $this->check(['update'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur peut supprimer
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canDelete($subject, $connectedUser)
	{
		return $this->check(['delete'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur peut gérer (toutes les actions)
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canManage($subject, $connectedUser)
	{
		return $this->check(['manage'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur a accès historique
	 * 
	 * @param string $subject Sujet de la permission
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function canViewHistorical($subject, $connectedUser)
	{
		return $this->check(['historical'], $subject, $connectedUser);
	}

	/**
	 * Vérifie si l'utilisateur est administrateur
	 * 
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function isAdmin($connectedUser)
	{
		return isset($connectedUser->profile) && $connectedUser->profile === 'admin';
	}

	/**
	 * Vérifie si l'utilisateur a un profil spécifique
	 * 
	 * @param string $profile Profil à vérifier
	 * @param object $connectedUser Utilisateur connecté
	 * @return bool
	 */
	public function hasProfile($profile, $connectedUser)
	{
		return isset($connectedUser->profile) && $connectedUser->profile === $profile;
	}
}
