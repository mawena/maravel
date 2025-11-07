<?php

namespace Maravel\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Classe de base enrichie pour tous les modèles
 *
 * Cette classe fournit des fonctionnalités avancées pour le formatage
 * des données, les casts personnalisés et la gestion des dates.
 *
 * Utilisez cette classe comme classe parente pour vos modèles Eloquent
 * pour bénéficier automatiquement du formatage des dates, montants,
 * énumérations et autres types de données.
 *
 * @example
 * class Product extends ModelBase
 * {
 *     protected $dateCasts = ['published_at' => 'd/m/Y'];
 *     protected $moneyCasts = ['price', 'cost'];
 *     protected $enumCasts = [
 *         'status' => ['draft' => 'Brouillon', 'published' => 'Publié']
 *     ];
 * }
 */
class ModelBase extends Model
{
	use ModelTrait;
}
