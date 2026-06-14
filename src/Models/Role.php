<?php

namespace Maravel\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Modèle de base d'un Rôle (système RBAC dynamique).
 *
 * Un rôle regroupe un ensemble de permissions et peut être assigné
 * à plusieurs utilisateurs (relation many-to-many). Les rôles sont
 * stockés en base de données et entièrement gérables via CRUD.
 *
 * Le drapeau `is_super_admin` accorde tous les droits : le trait
 * HasRoles injecte alors automatiquement la règle CASL
 * `{subject: ['all'], action: ['manage']}` pour l'utilisateur.
 *
 * Étendez cette classe dans votre application (App\Models\Role) pour la
 * personnaliser, et référencez-la dans la configuration
 * `advanced-api-controller.rbac.models.role`.
 */
class Role extends ModelBase
{
    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'label',
        'description',
        'is_super_admin',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'is_super_admin' => 'boolean',
    ];

    /**
     * Résout le nom de la table depuis la configuration.
     */
    public function getTable()
    {
        return $this->table
            ?? config('advanced-api-controller.rbac.tables.roles', 'roles');
    }

    /**
     * Les permissions accordées par ce rôle.
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(
            Permission::permissionModelClass(),
            config('advanced-api-controller.rbac.tables.permission_role', 'permission_role'),
            'role_id',
            'permission_id'
        );
    }

    /**
     * Les utilisateurs auxquels ce rôle est assigné.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(
            static::userModelClass(),
            config('advanced-api-controller.rbac.tables.role_user', 'role_user'),
            'role_id',
            'user_id'
        );
    }

    /**
     * Classe du modèle Role à utiliser (config ou défaut librairie).
     */
    public static function roleModelClass(): string
    {
        return config('advanced-api-controller.rbac.models.role', static::class);
    }

    /**
     * Classe du modèle User à utiliser (config RBAC, puis provider d'auth).
     */
    public static function userModelClass(): string
    {
        return config('advanced-api-controller.rbac.models.user')
            ?? config('auth.providers.users.model', 'App\\Models\\User');
    }
}
