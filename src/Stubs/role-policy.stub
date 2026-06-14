<?php

namespace App\Policies;

use Maravel\Policies\BasePolicy;

/**
 * Policy pour le modèle Role.
 *
 * Les autorisations reposent sur les ability_rules de l'utilisateur connecté
 * (sujet "role"). Un super-admin (rôle is_super_admin) a tous les droits.
 *
 * Exemple de permissions à accorder à un rôle gestionnaire :
 *   { action: "manage", subject: "role" }
 * ou des actions fines : read / create / update / delete sur "role".
 */
class RolePolicy extends BasePolicy
{
    /**
     * Nom du modèle pour les permissions.
     */
    protected $modelName = "role";
}
