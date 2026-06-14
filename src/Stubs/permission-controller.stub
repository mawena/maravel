<?php

namespace App\Http\Controllers\API;

use App\Models\Permission;
use Maravel\Http\Controllers\APIController;

/**
 * @group Permissions
 *
 * EndPoints pour gérer les permissions (RBAC dynamique).
 *
 * Une permission est un couple (action, subject). Vous pouvez en créer autant
 * que nécessaire — par exemple action="validate", subject="user".
 *
 * @bodyParam action      string  required L'action.            Example: validate
 * @bodyParam subject     string  required Le sujet.            Example: user
 * @bodyParam label       string  Libellé lisible.              Example: Valider un utilisateur
 * @bodyParam description string  Description de la permission.
 */
class PermissionController extends APIController
{
    protected string $modelClass = Permission::class;

    protected array $indexSearchFieldList = ['action', 'subject', 'label', 'description'];

    public function __construct()
    {
        parent::__construct();

        $this->storeValidationArray = [
            'action' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'label' => 'sometimes|nullable|string|max:255',
            'description' => 'sometimes|nullable|string',
        ];

        // Unicité du couple (action, subject).
        $this->storeManualValidationsFunction = function (array $requestData) {
            $exists = Permission::where('action', $requestData['action'] ?? null)
                ->where('subject', $requestData['subject'] ?? null)
                ->exists();

            if ($exists) {
                return [
                    'errors' => ['permission' => ['Cette permission (action + sujet) existe déjà']],
                    'status' => 422,
                ];
            }

            return null;
        };

        $this->updateGetValidationArrayFunction = function (int $id) {
            return [
                'action' => 'sometimes|string|max:255',
                'subject' => 'sometimes|string|max:255',
                'label' => 'sometimes|nullable|string|max:255',
                'description' => 'sometimes|nullable|string',
            ];
        };

        // Unicité du couple (action, subject) en mise à jour (hors enregistrement courant).
        $this->updateManualValidationsFunction = function (array $requestData, $model) {
            $action = $requestData['action'] ?? $model->action;
            $subject = $requestData['subject'] ?? $model->subject;

            $exists = Permission::where('action', $action)
                ->where('subject', $subject)
                ->where('id', '!=', $model->id)
                ->exists();

            if ($exists) {
                return [
                    'errors' => ['permission' => ['Cette permission (action + sujet) existe déjà']],
                    'status' => 422,
                ];
            }

            return null;
        };
    }
}
