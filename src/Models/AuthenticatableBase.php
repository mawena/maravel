<?php

namespace Maravel\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Classe de base enrichie pour les modèles d'authentification
 *
 * Cette classe étend Authenticatable de Laravel et fournit les mêmes fonctionnalités
 * avancées que ModelBase pour le formatage des données, les casts personnalisés
 * et la gestion des dates grâce au trait ModelTrait.
 *
 * Utilisez cette classe pour les modèles User ou tout modèle nécessitant
 * l'authentification Laravel.
 *
 * @example
 * class User extends AuthenticatableBase
 * {
 *     use HasApiTokens, Notifiable;
 *
 *     protected $enumCasts = [
 *         'profile' => ['admin' => 'Administrateur', 'user' => 'Utilisateur']
 *     ];
 *
 *     public function getAbilityRulesAttribute(): array
 *     {
 *         return match($this->profile) {
 *             'admin' => [['subject' => ['all'], 'action' => ['manage']]],
 *             default => [],
 *         };
 *     }
 * }
 */
class AuthenticatableBase extends Authenticatable
{
	use ModelTrait;
}
