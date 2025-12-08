<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentGeneratorController;

Route::get('/user', function (Request $request) {
	return $request->user();
})->middleware('auth:sanctum');

// Routes pour la génération de documents
Route::post('/generate-documents', [DocumentGeneratorController::class, 'generate'])
	->name('documents.generate');

// Route optionnelle pour obtenir les variables d'un template
Route::post('/template-variables', [DocumentGeneratorController::class, 'getTemplateVariables'])
	->name('documents.template-variables');
