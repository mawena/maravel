#!/bin/bash

# Script d'installation pour Maravel
# Usage: ./install.sh [chemin_vers_projet_laravel]

echo "🚀 Installation de Maravel"
echo "================================================"

# Vérifier si un chemin de projet est fourni
if [ -z "$1" ]; then
    echo "❌ Erreur: Veuillez fournir le chemin vers votre projet Laravel"
    echo "Usage: ./install.sh /chemin/vers/votre/projet"
    exit 1
fi

PROJECT_PATH="$1"

# Vérifier que le chemin existe
if [ ! -d "$PROJECT_PATH" ]; then
    echo "❌ Erreur: Le chemin '$PROJECT_PATH' n'existe pas"
    exit 1
fi

# Vérifier que c'est un projet Laravel
if [ ! -f "$PROJECT_PATH/artisan" ]; then
    echo "❌ Erreur: '$PROJECT_PATH' ne semble pas être un projet Laravel"
    exit 1
fi

echo "✅ Projet Laravel trouvé: $PROJECT_PATH"

# Aller dans le répertoire du projet
cd "$PROJECT_PATH"

echo "📦 Installation via Composer..."

# Installer la librairie via Composer
composer require mawena/maravel

if [ $? -eq 0 ]; then
    echo "✅ Librairie installée avec succès"
else
    echo "❌ Erreur lors de l'installation"
    exit 1
fi

echo "📋 Publication de la configuration..."

# Publier la configuration
php artisan vendor:publish --provider="LaravelApiController\\Providers\\ApiControllerServiceProvider" --tag="api-controller-config"

if [ $? -eq 0 ]; then
    echo "✅ Configuration publiée"
else
    echo "⚠️  Configuration non publiée (optionnel)"
fi

echo "📁 Création des dossiers nécessaires..."

# Créer les dossiers nécessaires
mkdir -p app/Http/Controllers/API
mkdir -p app/Models

echo "📝 Création d'un exemple de contrôleur..."

# Créer un exemple de contrôleur
cat > app/Http/Controllers/API/ExampleController.php << 'EOF'
<?php

namespace App\Http\Controllers\API;

use LaravelApiController\Http\Controllers\APIController;
use App\Models\Example;

class ExampleController extends APIController
{
    protected string $modelClass = Example::class;

    protected array $storeValidationArray = [
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
    ];

    protected array $indexSearchFieldList = ['name', 'description'];
}
EOF

echo "✅ Exemple de contrôleur créé: app/Http/Controllers/API/ExampleController.php"

echo "🛣️  Ajout des routes d'exemple..."

# Ajouter les routes d'exemple
cat >> routes/api.php << 'EOF'

// Routes d'exemple pour la librairie Laravel API Controller
Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('examples', App\Http\Controllers\API\ExampleController::class);
});
EOF

echo "✅ Routes d'exemple ajoutées"

echo "📚 Documentation..."

# Créer un lien vers la documentation
cat > LARAVEL_API_CONTROLLER_README.md << 'EOF'
# Maravel - Documentation

Cette librairie a été installée dans votre projet Laravel.

## Utilisation rapide

1. Créez un modèle Eloquent
2. Créez un contrôleur qui étend `LaravelApiController\Http\Controllers\APIController`
3. Configurez les propriétés du contrôleur
4. Ajoutez les routes

## Exemple

```php
use LaravelApiController\Http\Controllers\APIController;

class UserController extends APIController
{
    protected string $modelClass = User::class;
    protected array $storeValidationArray = [
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
    ];
}
```

## Documentation complète

Consultez le README.md de la librairie pour plus de détails.

## Support

Pour toute question, consultez la documentation ou ouvrez une issue.
EOF

echo "✅ Documentation créée: LARAVEL_API_CONTROLLER_README.md"

echo ""
echo "🎉 Installation terminée avec succès!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Créez vos modèles Eloquent"
echo "2. Créez vos contrôleurs qui étendent APIController"
echo "3. Configurez vos routes"
echo "4. Consultez la documentation pour plus de détails"
echo ""
echo "📚 Documentation: LARAVEL_API_CONTROLLER_README.md"
echo "🔧 Configuration: config/api-controller.php"
echo "📝 Exemple: app/Http/Controllers/API/ExampleController.php"
echo ""
echo "Bon développement! 🚀"
