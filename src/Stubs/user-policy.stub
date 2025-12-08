<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Model;
use Maravel\Policies\BasePolicy;

/**
 * Policy pour le modèle User
 *
 * Cette policy gère les permissions pour la gestion des utilisateurs
 * avec des règles spécifiques selon le profil.
 */
class UserPolicy extends BasePolicy
{
    /**
     * Nom du modèle pour les permissions
     */
    protected $modelName = "user";

    /**
     * Vérifications personnalisées pour viewAny
     *
     * @param User $connectedUser Utilisateur connecté
     * @return Response
     */
    public function viewAny($connectedUser)
    {
        // Les utilisateurs peuvent voir la liste des utilisateurs selon leurs permissions
        return parent::viewAny($connectedUser);
    }

    /**
     * Vérifications personnalisées pour view
     *
     * @param User $connectedUser Utilisateur connecté
     * @param User $user Utilisateur à consulter
     * @return Response
     */
    public function view($connectedUser, Model $user)
    {
        // Un utilisateur peut toujours voir ses propres données
        if ($connectedUser->id === $user->id) {
            return Response::allow();
        }

        // Sinon, vérifier les permissions
        return parent::view($connectedUser, $user);
    }

    /**
     * Vérifications personnalisées pour create
     *
     * @param User $connectedUser Utilisateur connecté
     * @return Response
     */
    public function create($connectedUser)
    {
        // Seuls les administrateurs peuvent créer des utilisateurs
        return parent::create($connectedUser);
    }

    /**
     * Vérifications personnalisées pour update
     *
     * @param User $connectedUser Utilisateur connecté
     * @param User $user Utilisateur à modifier
     * @return Response
     */
    public function update($connectedUser, Model $user)
    {
        // Un utilisateur peut toujours modifier ses propres données
        if ($connectedUser->id === $user->id) {
            return Response::allow();
        }

        // Sinon, vérifier les permissions (admin uniquement)
        return parent::update($connectedUser, $user);
    }

    /**
     * Vérifications personnalisées pour delete
     *
     * @param User $connectedUser Utilisateur connecté
     * @param User $user Utilisateur à supprimer
     * @return Response
     */
    public function delete($connectedUser, Model $user)
    {
        // Un utilisateur ne peut pas se supprimer lui-même
        if ($connectedUser->id === $user->id) {
            return Response::deny('Vous ne pouvez pas supprimer votre propre compte');
        }

        // Seuls les administrateurs peuvent supprimer des utilisateurs
        return parent::delete($connectedUser, $user);
    }

    /**
     * Vérifications personnalisées pour restore
     *
     * @param User $connectedUser Utilisateur connecté
     * @param User $user Utilisateur à restaurer
     * @return Response
     */
    public function restore($connectedUser, Model $user)
    {
        // Seuls les administrateurs peuvent restaurer des utilisateurs
        return parent::restore($connectedUser, $user);
    }

    /**
     * Vérifications personnalisées pour forceDelete
     *
     * @param User $connectedUser Utilisateur connecté
     * @param User $user Utilisateur à supprimer définitivement
     * @return Response
     */
    public function forceDelete($connectedUser, Model $user)
    {
        // Seuls les administrateurs peuvent supprimer définitivement des utilisateurs
        return parent::forceDelete($connectedUser, $user);
    }

    /**
     * Vérifications personnalisées pour updatePassword
     *
     * @param User $connectedUser Utilisateur connecté
     * @return Response
     */
    public function updatePassword($connectedUser)
    {
        // Un utilisateur peut toujours changer son propre mot de passe
        return Response::allow();
    }
}
