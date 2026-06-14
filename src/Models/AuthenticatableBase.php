<?php

namespace Maravel\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Maravel\Models\Concerns\HasRoles;

/**
 * Classe de base enrichie pour les modèles d'authentification
 *
 * Cette classe étend Authenticatable de Laravel et fournit les mêmes fonctionnalités
 * avancées que ModelBase pour le formatage des données, les casts personnalisés
 * et la gestion des dates grâce au trait ModelTrait.
 *
 * Depuis la v4, elle intègre le système de rôles & permissions dynamique via le
 * trait HasRoles : la relation `roles()` et l'accessor `ability_rules` (format CASL,
 * calculé depuis la base de données) sont disponibles d'office. `ability_rules` est
 * automatiquement ajouté à la sérialisation pour être consommé par CASL côté frontend.
 *
 * Utilisez cette classe pour les modèles User ou tout modèle nécessitant
 * l'authentification Laravel.
 *
 * @example
 * class User extends AuthenticatableBase
 * {
 *     use HasApiTokens, Notifiable;
 *
 *     // ability_rules est calculé dynamiquement depuis les rôles assignés.
 *     // Gérez les rôles via $user->assignRole('admin'), $user->syncRoles(...), etc.
 * }
 */
class AuthenticatableBase extends Authenticatable
{
	use HasApiTokens, Notifiable;

	use ModelTrait;

	use HasRoles;

	/**
	 * Expose `ability_rules` (format CASL) dans la sérialisation pour le frontend.
	 *
	 * @var array<int, string>
	 */
	protected $appends = ['ability_rules'];
}
