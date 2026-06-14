<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

/**
 * Seeder initial du système RBAC.
 *
 * Crée :
 * - un rôle "admin" super-administrateur (tous les droits),
 * - un jeu de permissions de base (utilisateurs, rôles, permissions).
 *
 * Adaptez librement à votre domaine. Lancez-le via :
 *   php artisan db:seed --class=RolePermissionSeeder
 */
class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Rôle super-administrateur : accorde automatiquement « manage / all ».
        Role::firstOrCreate(
            ['name' => 'admin'],
            [
                'label' => 'Administrateur',
                'description' => 'Accès complet à toutes les ressources',
                'is_super_admin' => true,
            ]
        );

        // Permissions de base. Ajoutez-en autant que nécessaire à l'avenir.
        $permissions = [
            ['action' => 'read', 'subject' => 'user', 'label' => 'Voir les utilisateurs'],
            ['action' => 'create', 'subject' => 'user', 'label' => 'Créer un utilisateur'],
            ['action' => 'update', 'subject' => 'user', 'label' => 'Modifier un utilisateur'],
            ['action' => 'delete', 'subject' => 'user', 'label' => 'Supprimer un utilisateur'],
            ['action' => 'manage', 'subject' => 'role', 'label' => 'Gérer les rôles'],
            ['action' => 'manage', 'subject' => 'permission', 'label' => 'Gérer les permissions'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(
                ['action' => $permission['action'], 'subject' => $permission['subject']],
                ['label' => $permission['label'] ?? null]
            );
        }
    }
}
