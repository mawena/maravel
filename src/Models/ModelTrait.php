<?php

namespace Maravel\Models;

use Illuminate\Support\Carbon;

/**
 * Trait ModelTrait
 *
 * Ce trait fournit des fonctionnalités avancées pour le formatage
 * des données, les casts personnalisés et la gestion des dates.
 *
 * Il peut être utilisé avec n'importe quel modèle Eloquent ou Authenticatable.
 */
trait ModelTrait
{
	/**
	 * Casts de dates personnalisés
	 * Format: ['column_name' => 'd/m/Y H:i']
	 */
	protected $dateCasts = [];

	/**
	 * Format par défaut pour les dates
	 */
	protected $date_cast_format = 'd/m/Y H:i:s';

	/**
	 * Casts booléens personnalisés
	 * Format: ['column_name']
	 */
	protected $booleanCasts = [];

	/**
	 * Casts pour les entiers longs
	 * Format: ['column_name']
	 */
	protected $big_integer_casts = [];

	/**
	 * Casts pour les nombres flottants
	 * Format: ['column_name']
	 */
	protected $floatCasts = [];

	/**
	 * Casts pour les montants monétaires
	 * Format: ['column_name']
	 */
	protected $moneyCasts = [];

	/**
	 * Casts pour les énumérations
	 * Format: ['column' => ['value1' => 'Label1', 'value2' => 'Label2']]
	 */
	protected $enumCasts = [];

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
		foreach ($this->dateCasts as $column => $format) {
			if (array_key_exists($column, $this->attributes) && $this->attributes[$column]) {
				$formatted_name = $column . '_fr';
				$data[$formatted_name] = Carbon::parse($this->attributes[$column])->format($format);
			}
		}

		// Formatage des booléens
		foreach ($this->booleanCasts as $column) {
			if (array_key_exists($column, $this->attributes)) {
				$formatted_name = $column . '_formatted';
				$data[$formatted_name] = (bool) $this->attributes[$column];
			}
		}

		// Formatage des nombres flottants
		foreach ($this->floatCasts as $column) {
			if (array_key_exists($column, $this->attributes)) {
				$formatted_name = $column . '_fr';
				$data[$formatted_name] = number_format((float) $this->attributes[$column], 2, ',', ' ');
			}
		}

		// Formatage des entiers longs
		foreach ($this->big_integer_casts as $column) {
			if (array_key_exists($column, $this->attributes)) {
				$formatted_name = $column . '_fr';
				$data[$column] = (int) $this->attributes[$column];
				$data[$formatted_name] = number_format((int) $this->attributes[$column], 0, ',', ' ');
			}
		}

		// Formatage des montants monétaires
		foreach ($this->moneyCasts as $column) {
			if (array_key_exists($column, $this->attributes)) {
				$formatted_name = $column . '_fr';
				$value = (float) $this->attributes[$column];
				$data[$formatted_name] = number_format($value, 2, ',', ' ') . ' XOF';
			}
		}

		// Formatage des énumérations
		foreach ($this->enumCasts as $info) {
			$column = $info["colum_name"];
			$choices = $info["choices"];
			$formatted_name = $info["additional_column_name"];
			if (array_key_exists($column, $this->attributes)) {
				$value = $this->attributes[$column];
				$data[$formatted_name] = $choices[$value] ?? $value;
			}
		}

		return $data;
	}

	/**
	 * Méthode pour ajouter des casts de dates dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @param string|null $format Format de date (ex: 'd/m/Y H:i')
	 * @return self
	 */
	public function addDateCast(string $column, ?string $format = null): self
	{
		$this->dateCasts[$column] = $format ?? $this->date_cast_format;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts booléens dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @return self
	 */
	public function addBooleanCast(string $column): self
	{
		$this->booleanCasts[] = $column;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts d'énumération dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @param array $choices Tableau de choix [value => label]
	 * @return self
	 */
	public function addEnumCast(string $column, array $choices): self
	{
		$this->enumCasts[$column] = $choices;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts monétaires dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @return self
	 */
	public function addMoneyCast(string $column): self
	{
		$this->moneyCasts[] = $column;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts float dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @return self
	 */
	public function addFloatCast(string $column): self
	{
		$this->floatCasts[] = $column;
		return $this;
	}

	/**
	 * Méthode pour ajouter des casts big integer dynamiquement
	 *
	 * @param string $column Nom de la colonne
	 * @return self
	 */
	public function addBigIntegerCast(string $column): self
	{
		$this->big_integer_casts[] = $column;
		return $this;
	}
}