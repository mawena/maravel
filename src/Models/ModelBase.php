<?php

namespace LaravelAdvancedApiController\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * Classe de base enrichie pour tous les modèles
 * 
 * Cette classe fournit des fonctionnalités avancées pour le formatage
 * des données, les casts personnalisés et la gestion des dates.
 */
class ModelBase extends Model
{
	/**
	 * Casts de dates personnalisés
	 * Format: ['column_name' => ['new_name' => 'formatted_name', 'format' => 'd/m/Y']]
	 */
	protected $date_casts = [];

	/**
	 * Format par défaut pour les dates
	 */
	protected $date_cast_format = 'd/m/Y H:i:s';

	/**
	 * Casts booléens personnalisés
	 * Format: ['column_name' => 'formatted_name']
	 */
	protected $boolean_casts = [];

	/**
	 * Casts pour les entiers longs
	 * Format: ['column_name' => 'formatted_name']
	 */
	protected $big_integer_casts = [];

	/**
	 * Casts pour les nombres flottants
	 * Format: ['column_name' => 'formatted_name']
	 */
	protected $float_casts = [];

	/**
	 * Casts pour les montants monétaires
	 * Format: ['column_name' => 'formatted_name']
	 */
	protected $money_casts = [];

	/**
	 * Casts pour les énumérations
	 * Format: ['column_name' => ['choices' => [...], 'additional_column_name' => 'formatted_name']]
	 */
	protected $enum_casts = [];

	/**
	 * Surcharge de toArray pour ajouter les formats personnalisés
	 */
	public function toArray()
	{
		$data = parent::toArray();

		// Formatage des dates par défaut (created_at, updated_at)
		foreach (['created_at' => 'created_at_fr', 'updated_at' => 'updated_at_fr'] as $date_cast => $new_name) {
			if (array_key_exists($date_cast, $this->attributes)) {
				$data[$new_name] = Carbon::parse($data[$date_cast])->format($this->date_cast_format);
			}
		}

		// Formatage des dates personnalisées
		foreach ($this->date_casts as $date_cast => $new_date) {
			if (array_key_exists($date_cast, $this->attributes)) {
				$data[$new_date['new_name']] = Carbon::parse($data[$date_cast])->format($new_date['format']);
			}
		}

		// Formatage des booléens
		foreach ($this->boolean_casts as $boolean_cast => $new_name) {
			if (array_key_exists($boolean_cast, $this->attributes)) {
				$data[$new_name] = (bool) $data[$boolean_cast];
			}
		}

		// Formatage des nombres flottants
		foreach ($this->float_casts as $float_cast => $new_name) {
			if (array_key_exists($float_cast, $this->attributes)) {
				$data[$new_name] = (float) $data[$float_cast];
				$data["{$new_name}_fr"] = number_format($data[$float_cast], 2, ',', ' ');
			}
		}

		// Formatage des entiers longs
		foreach ($this->big_integer_casts as $big_integer => $new_name) {
			if (array_key_exists($big_integer, $this->attributes)) {
				$data[$new_name] = (int) $data[$big_integer];
				$data["{$new_name}_fr"] = number_format($data[$big_integer], 0, ',', ' ');
			}
		}

		// Formatage des montants monétaires
		foreach ($this->money_casts as $money_cast => $new_name) {
			if (array_key_exists($money_cast, $this->attributes)) {
				$data[$new_name] = (float) $data[$money_cast];
				$data["{$money_cast}_fr"] = number_format($data[$money_cast], 2, ',', ' ') . ' XOF';
			}
		}

		// Formatage des énumérations
		foreach ($this->enum_casts as $params) {
			if (array_key_exists($params['column_name'], $this->attributes)) {
				$data[$params['additional_column_name']] = $params['choices'][$data[$params['column_name']]] ?? $data[$params['column_name']];
			}
		}

		return $data;
	}

	/**
	 * Méthode pour ajouter des casts de dates dynamiquement
	 */
	public function addDateCast($column, $newName, $format = null)
	{
		$this->date_casts[$column] = [
			'new_name' => $newName,
			'format' => $format ?? $this->date_cast_format
		];
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts booléens dynamiquement
	 */
	public function addBooleanCast($column, $newName)
	{
		$this->boolean_casts[$column] = $newName;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts d'énumération dynamiquement
	 */
	public function addEnumCast($column, $choices, $additionalColumnName)
	{
		$this->enum_casts[] = [
			'column_name' => $column,
			'choices' => $choices,
			'additional_column_name' => $additionalColumnName
		];
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts monétaires dynamiquement
	 */
	public function addMoneyCast($column, $newName)
	{
		$this->money_casts[$column] = $newName;
		return $this;
	}
}
