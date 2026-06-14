<?php

namespace Maravel\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Modèle de base d'une Permission (système RBAC dynamique).
 *
 * Une permission est un couple (action, subject) — par exemple
 * action="validate", subject="user" — stocké en base de données.
 * Les permissions ne sont pas figées : on peut en créer autant que
 * nécessaire à l'exécution.
 *
 * Étendez cette classe dans votre application (App\Models\Permission)
 * pour la personnaliser, et référencez-la dans la configuration
 * `advanced-api-controller.rbac.models.permission`.
 */
class Permission extends ModelBase
{
    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'action',
        'subject',
        'label',
        'description',
    ];

    /**
     * Résout le nom de la table depuis la configuration.
     */
    public function getTable()
    {
        return $this->table
            ?? config('advanced-api-controller.rbac.tables.permissions', 'permissions');
    }

    /**
     * Les rôles qui possèdent cette permission.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(
            Role::roleModelClass(),
            config('advanced-api-controller.rbac.tables.permission_role', 'permission_role'),
            'permission_id',
            'role_id'
        );
    }

    /**
     * Représentation de la permission au format CASL.
     *
     * @return array{subject: array<int, string>, action: array<int, string>}
     */
    public function toCaslRule(): array
    {
        return [
            'subject' => [$this->subject],
            'action' => [$this->action],
        ];
    }

    /**
     * Classe du modèle Permission à utiliser (config ou défaut librairie).
     */
    public static function permissionModelClass(): string
    {
        return config('advanced-api-controller.rbac.models.permission', static::class);
    }
}
