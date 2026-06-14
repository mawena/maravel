<?php

namespace Maravel\Models\Concerns;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Maravel\Models\Role;

/**
 * Trait HasRoles
 *
 * À appliquer sur le modèle User (déjà inclus dans AuthenticatableBase).
 *
 * Il fournit :
 * - la relation many-to-many `roles()`
 * - l'accessor `ability_rules` calculé dynamiquement depuis les rôles et
 *   leurs permissions, au format CASL — exposé au frontend (Vue.js / CASL)
 * - des helpers d'autorisation (isAdmin, hasRole, hasPermissionTo)
 * - des helpers d'assignation (assignRole, syncRoles, removeRole)
 *
 * Le format de `ability_rules` est strictement identique à l'ancien système
 * statique : `[['subject' => [...], 'action' => [...]], ...]`.
 */
trait HasRoles
{
    /**
     * Cache mémoïsé des règles d'abilités pour la durée de la requête.
     */
    protected ?array $cachedAbilityRules = null;

    /**
     * Les rôles assignés à l'utilisateur.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(
            static::roleModelClass(),
            config('advanced-api-controller.rbac.tables.role_user', 'role_user'),
            'user_id',
            'role_id'
        );
    }

    /**
     * Accessor : règles d'abilités au format CASL, calculées depuis la BDD.
     *
     * @return array<int, array{subject: array<int, string>, action: array<int, string>}>
     */
    public function getAbilityRulesAttribute(): array
    {
        if ($this->cachedAbilityRules !== null) {
            return $this->cachedAbilityRules;
        }

        $roles = $this->loadedRoles();

        // Super-admin : un seul rôle is_super_admin suffit pour tout autoriser.
        foreach ($roles as $role) {
            if ($role->is_super_admin) {
                return $this->cachedAbilityRules = [
                    ['subject' => ['all'], 'action' => ['manage']],
                ];
            }
        }

        // Sinon, on agrège les permissions de tous les rôles, groupées par sujet.
        $actionsBySubject = [];
        foreach ($roles as $role) {
            foreach ($role->permissions as $permission) {
                $actionsBySubject[$permission->subject][] = $permission->action;
            }
        }

        $rules = [];
        foreach ($actionsBySubject as $subject => $actions) {
            $rules[] = [
                'subject' => [$subject],
                'action' => array_values(array_unique($actions)),
            ];
        }

        return $this->cachedAbilityRules = $rules;
    }

    /**
     * Indique si l'utilisateur est super-administrateur (au moins un rôle flaggé).
     */
    public function isAdmin(): bool
    {
        foreach ($this->loadedRoles() as $role) {
            if ($role->is_super_admin) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indique si l'utilisateur possède un rôle donné (par nom).
     */
    public function hasRole(string $name): bool
    {
        return $this->loadedRoles()->contains('name', $name);
    }

    /**
     * Indique si l'utilisateur possède une permission (action + sujet),
     * en tenant compte des raccourcis `manage` et `all`.
     */
    public function hasPermissionTo(string $action, string $subject): bool
    {
        foreach ($this->ability_rules as $rule) {
            $subjects = (array) ($rule['subject'] ?? []);
            $actions = (array) ($rule['action'] ?? []);

            if (in_array('all', $subjects, true) || in_array($subject, $subjects, true)) {
                if (in_array('manage', $actions, true) || in_array($action, $actions, true)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Assigne un ou plusieurs rôles sans détacher les rôles existants.
     *
     * @param int|string|\Illuminate\Database\Eloquent\Model ...$roles
     */
    public function assignRole(...$roles): static
    {
        $this->roles()->syncWithoutDetaching($this->resolveRoleIds($roles));
        $this->refreshAbilityRules();

        return $this;
    }

    /**
     * Remplace l'intégralité des rôles de l'utilisateur.
     *
     * @param int|string|\Illuminate\Database\Eloquent\Model ...$roles
     */
    public function syncRoles(...$roles): static
    {
        $this->roles()->sync($this->resolveRoleIds($roles));
        $this->refreshAbilityRules();

        return $this;
    }

    /**
     * Retire un ou plusieurs rôles.
     *
     * @param int|string|\Illuminate\Database\Eloquent\Model ...$roles
     */
    public function removeRole(...$roles): static
    {
        $this->roles()->detach($this->resolveRoleIds($roles));
        $this->refreshAbilityRules();

        return $this;
    }

    /**
     * Réinitialise le cache des règles et la relation chargée.
     */
    public function refreshAbilityRules(): void
    {
        $this->cachedAbilityRules = null;
        $this->unsetRelation('roles');
    }

    /**
     * Retourne les rôles, en les chargeant (avec leurs permissions) si besoin.
     */
    protected function loadedRoles(): Collection
    {
        if (!$this->relationLoaded('roles')) {
            $this->load('roles.permissions');
        }

        return $this->getRelation('roles');
    }

    /**
     * Convertit une liste hétérogène (ids, noms, modèles) en ids de rôles.
     *
     * @param array<int, mixed> $roles
     * @return array<int, int>
     */
    protected function resolveRoleIds(array $roles): array
    {
        $roles = collect($roles)->flatten();
        $names = [];
        $ids = [];

        foreach ($roles as $role) {
            if ($role instanceof \Illuminate\Database\Eloquent\Model) {
                $ids[] = $role->getKey();
            } elseif (is_numeric($role)) {
                $ids[] = (int) $role;
            } elseif (is_string($role)) {
                $names[] = $role;
            }
        }

        if (!empty($names)) {
            $roleModel = static::roleModelClass();
            $ids = array_merge(
                $ids,
                $roleModel::whereIn('name', $names)->pluck('id')->all()
            );
        }

        return array_values(array_unique($ids));
    }

    /**
     * Classe du modèle Role à utiliser (config ou défaut librairie).
     */
    public static function roleModelClass(): string
    {
        return config('advanced-api-controller.rbac.models.role', Role::class);
    }
}
