<?php

namespace App\Policies;

use Maravel\Policies\BasePolicy;

/**
 * Policy pour le modèle Permission.
 *
 * Les autorisations reposent sur les ability_rules de l'utilisateur connecté
 * (sujet "permission"). Un super-admin (rôle is_super_admin) a tous les droits.
 */
class PermissionPolicy extends BasePolicy
{
    /**
     * Nom du modèle pour les permissions.
     */
    protected $modelName = "permission";
}
