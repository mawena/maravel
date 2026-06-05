<?php

/**
 * Exemple de routes pour utiliser la librairie Laravel API Controller
 * 
 * Ce fichier montre comment configurer les routes pour utiliser
 * les contrôleurs qui étendent APIController.
 */

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\CategoryController;
use Illuminate\Support\Facades\Route;

// Routes pour les utilisateurs
Route::middleware(['auth:sanctum'])->group(function () {
	// Routes CRUD standard
	Route::apiResource('users', UserController::class);

	// Route pour la création multiple
	Route::post('users/multiple', [UserController::class, 'store_multiple']);

	// Routes personnalisées si nécessaire
	Route::get('users/me', [UserController::class, 'me']);
	Route::put('users/me', [UserController::class, 'updateMe']);
});

// Routes pour les posts
Route::middleware(['auth:sanctum'])->group(function () {
	Route::apiResource('posts', PostController::class);
	Route::post('posts/multiple', [PostController::class, 'store_multiple']);

	// Routes spécifiques aux posts
	Route::get('posts/{post}/comments', [PostController::class, 'comments']);
	Route::post('posts/{post}/like', [PostController::class, 'like']);
});

// Routes pour les catégories (publiques)
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);

// Routes protégées pour les catégories
Route::middleware(['auth:sanctum'])->group(function () {
	Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);
	Route::post('categories/multiple', [CategoryController::class, 'store_multiple']);
});

/**
 * Exemples d'utilisation des routes générées :
 * 
 * GET    /api/users              - Liste des utilisateurs avec filtres
 * GET    /api/users/{id}        - Détails d'un utilisateur
 * POST   /api/users             - Création d'un utilisateur
 * POST   /api/users/multiple    - Création multiple d'utilisateurs
 * PUT    /api/users/{id}        - Mise à jour d'un utilisateur
 * DELETE /api/users/{id}        - Suppression d'un utilisateur
 * 
 * GET    /api/posts              - Liste des posts
 * GET    /api/posts/{id}         - Détails d'un post
 * POST   /api/posts              - Création d'un post
 * PUT    /api/posts/{id}         - Mise à jour d'un post
 * DELETE /api/posts/{id}         - Suppression d'un post
 * 
 * Exemples de requêtes avec filtres :
 * 
 * GET /api/users?search=john&in_status=active,inactive
 * GET /api/users?min<age=18&max<age=65&with_profile=true
 * GET /api/users?order_by_desc=created_at&per_page=20
 * GET /api/posts?search=laravel&with_user=true&with_comments=true
 */
