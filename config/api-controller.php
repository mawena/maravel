<?php

return [
	/*
	|--------------------------------------------------------------------------
	| Configuration par défaut pour APIController
	|--------------------------------------------------------------------------
	|
	| Ces options définissent les valeurs par défaut pour les contrôleurs API
	| qui étendent la classe APIController.
	|
	*/

	'defaults' => [
		'pagination' => [
			'per_page' => 8,
			'max_per_page' => 100,
		],
		'validation' => [
			'store_validation_array' => [],
			'store_validation_text_array' => [],
			'update_validation_text_array' => [],
		],
		'authorization' => [
			'index_ability_name' => 'viewAny',
			'show_ability_name' => 'viewAny',
			'store_auth_name' => 'create',
			'update_auth_name' => 'update',
			'destroy_auth_name' => 'delete',
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration des réponses
	|--------------------------------------------------------------------------
	|
	| Configuration pour le formatage des réponses JSON.
	|
	*/

	'responses' => [
		'utf8_encode' => true,
		'error_format' => 'html', // 'html' ou 'plain'
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration des filtres
	|--------------------------------------------------------------------------
	|
	| Configuration pour les filtres automatiques disponibles.
	|
	*/

	'filters' => [
		'enabled' => [
			'basic' => true,
			'min_max' => true,
			'in_not_in' => true,
			'relations' => true,
			'search' => true,
			'json' => true,
		],
	],
];
