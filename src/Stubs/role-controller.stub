<?php

namespace App\Http\Controllers\API;

use App\Models\Permission;
use App\Models\Role;
use Maravel\Http\Controllers\APIController;

/**
 * @group Rôles
 *
 * EndPoints pour gérer les rôles et leurs permissions (RBAC dynamique).
 *
 * Lors de la création ou de la mise à jour d'un rôle, un tableau `permissions`
 * peut être fourni. Chaque entrée peut être :
 *   - l'ID d'une permission existante (ex: 5)
 *   - un objet { "action": "...", "subject": "...", "label"?, "description"? }
 *     → la permission est créée si elle n'existe pas (find-or-create), puis attachée.
 *
 * @bodyParam name        string  required Nom unique du rôle.                Example: validateur
 * @bodyParam label       string  Libellé lisible.                           Example: Validateur
 * @bodyParam description string  Description du rôle.
 * @bodyParam is_super_admin boolean Accorde tous les droits.                Example: false
 * @bodyParam permissions array   Liste de permissions (ids ou objets).
 */
class RoleController extends APIController
{
    protected string $modelClass = Role::class;

    protected array $indexSearchFieldList = ['name', 'label', 'description'];

    public function __construct()
    {
        parent::__construct();

        $this->storeValidationArray = [
            'name' => 'required|string|max:255|unique:roles,name',
            'label' => 'sometimes|nullable|string|max:255',
            'description' => 'sometimes|nullable|string',
            'is_super_admin' => 'sometimes|boolean',
            'permissions' => 'sometimes|array',
        ];

        $this->updateGetValidationArrayFunction = function (int $id) {
            return [
                'name' => 'sometimes|string|max:255|unique:roles,name,' . $id,
                'label' => 'sometimes|nullable|string|max:255',
                'description' => 'sometimes|nullable|string',
                'is_super_admin' => 'sometimes|boolean',
                'permissions' => 'sometimes|array',
            ];
        };

        // Synchroniser les permissions après le commit (création / mise à jour).
        $this->storeAfterCommitFunction = function ($role, array $requestData) {
            $this->syncPermissions($role, $requestData['permissions'] ?? null);
            return $role->load('permissions');
        };

        $this->updateAfterCommitFunction = function ($role, array $requestData) {
            $this->syncPermissions($role, $requestData['permissions'] ?? null);
            return $role->load('permissions');
        };
    }

    /**
     * Synchronise les permissions d'un rôle.
     *
     * @param  \App\Models\Role  $role
     * @param  array|null  $permissions  Liste d'ids et/ou d'objets {action, subject}.
     */
    protected function syncPermissions($role, ?array $permissions): void
    {
        // Null = champ non fourni → on ne touche pas aux permissions existantes.
        if ($permissions === null) {
            return;
        }

        $ids = [];
        foreach ($permissions as $permission) {
            if (is_array($permission) && isset($permission['action'], $permission['subject'])) {
                $model = Permission::firstOrCreate(
                    [
                        'action' => $permission['action'],
                        'subject' => $permission['subject'],
                    ],
                    [
                        'label' => $permission['label'] ?? null,
                        'description' => $permission['description'] ?? null,
                    ]
                );
                $ids[] = $model->id;
            } elseif (is_numeric($permission)) {
                $ids[] = (int) $permission;
            }
        }

        $role->permissions()->sync(array_values(array_unique($ids)));
    }
}
