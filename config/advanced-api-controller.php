<?php

return [
	/*
	|--------------------------------------------------------------------------
	| Configuration pour Advanced API Controller v2
	|--------------------------------------------------------------------------
	|
	| Ces options définissent les valeurs par défaut pour les contrôleurs API
	| avancés avec système de permissions et modèles enrichis.
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

	/*
	|--------------------------------------------------------------------------
	| Configuration des permissions
	|--------------------------------------------------------------------------
	|
	| Configuration pour le système de permissions avancé.
	|
	*/

	'permissions' => [
		'enabled' => true,
		'use_advanced_policies' => true,
		'default_model_name' => '',
		'permission_checks' => [
			'before_all' => true,
			'custom_checks' => true,
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration RBAC (rôles & permissions dynamiques) — v4
	|--------------------------------------------------------------------------
	|
	| Depuis la v4, les rôles et permissions sont stockés en base de données
	| (et non plus codés en dur via un enum `profile`). Cette section permet
	| de personnaliser les classes de modèles et les noms de tables utilisés.
	|
	| - models : les classes Eloquent à utiliser. Laissez les sous-classes
	|   générées dans App\Models, ou pointez vers vos propres classes.
	| - tables : les noms des tables (pivots inclus).
	| - super_admin : un rôle dont `is_super_admin = true` accorde tous les
	|   droits, et injecte automatiquement la règle CASL « manage / all »
	|   dans `ability_rules`.
	|
	*/

	'rbac' => [
		'models' => [
			'user' => \App\Models\User::class,
			'role' => \App\Models\Role::class,
			'permission' => \App\Models\Permission::class,
		],
		'tables' => [
			'roles' => 'roles',
			'permissions' => 'permissions',
			'permission_role' => 'permission_role',
			'role_user' => 'role_user',
		],
		'super_admin' => [
			'flag_column' => 'is_super_admin',
			'inject_manage_all' => true,
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration des modèles
	|--------------------------------------------------------------------------
	|
	| Configuration pour les modèles enrichis avec ModelBase.
	|
	*/

	'models' => [
		'use_model_base' => true,
		'default_date_format' => 'd/m/Y H:i:s',
		'auto_casts' => [
			'created_at_fr' => true,
			'updated_at_fr' => true,
		],
		'money_format' => [
			'currency' => 'XOF',
			'decimal_places' => 2,
			'thousands_separator' => ' ',
			'decimal_separator' => ',',
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration des policies
	|--------------------------------------------------------------------------
	|
	| Configuration pour la génération et l'utilisation des policies.
	|
	*/

	'policies' => [
		'auto_register' => true,
		'namespace' => 'App\\Policies',
		'stub_path' => 'Maravel\\Stubs\\advanced-policy.stub',
		'default_permissions' => [
			'admin' => ['manage'],
			'user' => ['read', 'create', 'update', 'delete'],
		],
	],

	/*
	|--------------------------------------------------------------------------
	| Configuration des commandes
	|--------------------------------------------------------------------------
	|
	| Configuration pour les commandes personnalisées.
	|
	*/

	'commands' => [
		'make_advanced_policy' => [
			'enabled' => true,
			'namespace' => 'App\\Policies',
		],
	],
];
