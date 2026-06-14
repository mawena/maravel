<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Maravel\Models\Role as BaseRole;

/**
 * Modèle Role (système RBAC dynamique).
 *
 * Hérite de Maravel\Models\Role qui fournit :
 * - les relations permissions() et users()
 * - le drapeau is_super_admin (accorde tous les droits)
 *
 * Personnalisez librement ce modèle (relations, scopes, casts...).
 */
class Role extends BaseRole
{
    use HasFactory;
}
