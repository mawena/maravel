# Laravel Advanced API Controller Library v2

Une librairie Laravel avancée qui fournit un contrôleur API générique avec système de permissions, modèles enrichis, policies automatiques et traits personnalisés pour simplifier le développement d'APIs REST complexes.

## Installation

### Via Composer

```bash
composer require mawena/maravel
```

### Configuration

Publiez le fichier de configuration (optionnel) :

```bash
php artisan vendor:publish --provider="LaravelAdvancedApiController\\Providers\\AdvancedApiControllerServiceProvider" --tag="advanced-api-controller-config"
```

## Nouvelles fonctionnalités v2

### ✨ Système de permissions avancé
- **BasePolicy** avec vérifications automatiques
- **PermissionCheckerTrait** pour la gestion des permissions
- Support des profils utilisateur et règles d'abilités
- Vérifications personnalisées par modèle

### 🎯 Modèles enrichis
- **ModelBase** avec casts personnalisés
- Formatage automatique des dates, montants, booléens
- Support des énumérations et formats monétaires
- Méthodes utilitaires pour les statistiques

### 🛠️ Outils de développement
- **Commandes personnalisées** : 
  - `php artisan make:controller` (version avancée)
  - `php artisan make:policy` (version avancée)
  - `php artisan make:advanced-controller`
  - `php artisan make:advanced-policy`
- **Génération automatique** des contrôleurs et policies
- **Configuration avancée** via fichier de config
- **Stubs personnalisés** pour les contrôleurs et policies

## Commandes Artisan Disponibles

### Commandes Standard (Recommandées)

#### `make:controller`
Remplace la commande standard Laravel avec des fonctionnalités avancées :

```bash
php artisan make:controller ProductController
```

Génère un contrôleur API complet avec :
- Méthodes CRUD automatiques
- Gestion des relations
- Système de validation avancé
- Documentation API intégrée

#### `make:policy`
Remplace la commande standard Laravel avec des fonctionnalités avancées :

```bash
php artisan make:policy ProductPolicy
```

Génère une policy complète avec :
- Méthodes de permissions CRUD
- Vérifications personnalisables
- Support des profils utilisateur
- Système d'abilités avancé

### Commandes Avancées

#### `make:advanced-controller`
Génère un contrôleur avec toutes les fonctionnalités avancées :

```bash
php artisan make:advanced-controller ProductController
```

#### `make:advanced-policy`
Génère une policy avec toutes les fonctionnalités avancées :

```bash
php artisan make:advanced-policy ProductPolicy
```

## Utilisation

### 1. Créer un contrôleur API

Créez un contrôleur qui étend `LaravelAdvancedApiController\Http\Controllers\APIController` :

```php
<?php

namespace App\Http\Controllers\API;

use LaravelAdvancedApiController\Http\Controllers\APIController;
use App\Models\User;

class UserController extends APIController
{
    protected string $modelClass = User::class;
    
    // Configuration des validations
    protected array $storeValidationArray = [
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
    ];
    
    protected array $storeValidationTextArray = [
        'name.required' => 'Le nom est obligatoire',
        'email.required' => 'L\'email est obligatoire',
    ];
    
    // Configuration des autorisations
    protected string|null $indexAbilityName = "viewAny";
    protected string|null $storeAuthName = "create";
    protected string|null $updateAuthName = "update";
    protected string|null $destroyAuthName = "delete";
    
    // Champs de recherche
    protected array $indexSearchFieldList = ['name', 'email'];
    
    // Relations à charger
    protected array $storeRelationArray = ['profile'];
    protected array $updateRelationArray = ['profile'];
}
```

### 2. Définir les routes

```php
// routes/api.php
use App\Http\Controllers\API\UserController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('users', UserController::class);
    Route::post('users/multiple', [UserController::class, 'store_multiple']);
});
```

### 3. Fonctionnalités disponibles

#### Méthodes CRUD automatiques

- `GET /api/users` - Liste des utilisateurs avec filtres et pagination
- `GET /api/users/{id}` - Détails d'un utilisateur
- `POST /api/users` - Création d'un utilisateur
- `POST /api/users/multiple` - Création multiple d'utilisateurs
- `PUT /api/users/{id}` - Mise à jour d'un utilisateur
- `DELETE /api/users/{id}` - Suppression d'un utilisateur

#### Filtres automatiques

- **Filtres basiques** : `?name=John&email=john@example.com`
- **Filtres min/max** : `?min<age=18&max<age=65`
- **Filtres IN/NOT IN** : `?in_status=active,inactive&not_in_role=admin`
- **Recherche textuelle** : `?search=john`
- **Relations** : `?with_profile=true&with_posts=true`
- **Tri** : `?order_by_desc=created_at&order_by_asc=name`
- **Pagination** : `?per_page=20&paginate=false`

#### Hooks personnalisés

```php
class UserController extends APIController
{
    // Validation manuelle avant création
    protected $storeManualValidationsFunction = function($requestData) {
        // Logique de validation personnalisée
        if (/* condition */) {
            return ['errors' => ['field' => ['Message d\'erreur']], 'status' => 400];
        }
        return ['data' => ['custom_data' => 'value']];
    };
    
    // Fonction exécutée avant la création
    protected $storeBeforeCreateFunction = function($requestData, $manualValidationsData) {
        $requestData['slug'] = Str::slug($requestData['name']);
        return $requestData;
    };
    
    // Fonction exécutée après la création
    protected $storeAfterCreateFunction = function($model, $requestData, $manualValidationsData) {
        // Logique post-création
        $model->sendWelcomeEmail();
        return $model;
    };
}
```

### 2. Créer un modèle enrichi

Utilisez `ModelBase` pour des modèles avec formatage automatique :

```php
<?php

namespace App\Models;

use LaravelAdvancedApiController\Models\ModelBase;

class User extends ModelBase
{
    protected $fillable = ['name', 'email', 'balance', 'is_active'];
    
    // Casts personnalisés
    protected $money_casts = [
        'balance' => 'balance_formatted'
    ];
    
    protected $boolean_casts = [
        'is_active' => 'is_active_bool'
    ];
    
    protected $date_casts = [
        'last_login' => ['new_name' => 'last_login_fr', 'format' => 'd/m/Y H:i']
    ];
}
```

### 3. Créer une policy avancée

Utilisez les commandes personnalisées :

```bash
# Version standard (recommandée)
php artisan make:policy UserPolicy

# Version avancée
php artisan make:advanced-policy UserPolicy
```

Ou créez manuellement :

```php
<?php

namespace App\Policies;

use LaravelAdvancedApiController\Policies\BasePolicy;

class UserPolicy extends BasePolicy
{
    protected $modelName = "user";
    
    // Vérifications personnalisées
    public function view($user, $model)
    {
        // L'utilisateur peut voir ses propres données
        if ($model->id === $user->id) {
            return Response::allow();
        }
        
        return parent::view($user, $model);
    }
}
```

### 4. Configuration des permissions

Dans votre modèle User, configurez les règles d'abilités :

```php
public function getAbilityRulesAttribute()
{
    return [
        'admin' => [
            ['subject' => ['all'], 'action' => ['manage']]
        ],
        'user' => [
            ['subject' => ['user'], 'action' => ['read', 'update']],
            ['subject' => ['post'], 'action' => ['read', 'create']]
        ]
    ][$this->profile];
}
```

## Traits disponibles

### CustomResponseTrait

Fournit des méthodes pour formater les réponses JSON :

```php
// Réponse de succès simple
return $this->responseOk($data, $messages, $status);

// Réponse avec pagination
return $this->responseOkPaginate($data, $messages, $status);

// Réponse d'erreur
return $this->responseError($errors, $status);
```

### ControllerHelperTrait

Méthodes utilitaires pour les contrôleurs :

```php
// Filtrage de requête
$query = $this->queryFilter($query, $requestData, $modelName);
$query = $this->querySearch($query, $columns, $search);
$query = $this->queryRelationAdd($query, $requestData, $modelName);

// Gestion des fichiers base64
$path = $this->saveImageFromBase64($base64, $savePath);
$path = $this->saveBase64File($base64String, $path);
```

### ScriptGeneratorTrait

Méthodes pour la génération de code et templates :

```php
// Remplacement dans du contenu
$content = $this->replaceWithAs($filterArray, $expression, $content);
$content = $this->replaceFilters($filterArray, $valueArray, $expression, $content);
```

### PermissionCheckerTrait

Méthodes pour la vérification des permissions :

```php
// Vérifications de base
$canRead = $this->canRead('user', $user);
$canCreate = $this->canCreate('post', $user);
$canUpdate = $this->canUpdate('user', $user);
$canDelete = $this->canDelete('post', $user);

// Vérifications avancées
$canManage = $this->canManage('all', $user);
$isAdmin = $this->isAdmin($user);
$hasProfile = $this->hasProfile('admin', $user);

// Vérification personnalisée
$canCustom = $this->check(['custom_action'], 'user', $user);
```

## Configuration avancée

### Personnalisation des réponses

```php
class UserController extends APIController
{
    public function index(Request $request)
    {
        // Logique personnalisée avant d'appeler la méthode parent
        $request->merge(['custom_filter' => 'value']);
        
        return parent::index($request);
    }
}
```

### Filtrage personnalisé

```php
class UserController extends APIController
{
    protected $indexManualFilter = function($query, $user, $requestData) {
        // Filtrage basé sur l'utilisateur connecté
        if (!$user->isAdmin()) {
            $query->where('user_id', $user->id);
        }
        return $query;
    };
}
```

## Exemples d'utilisation

### Requête avec filtres multiples

```bash
GET /api/users?search=john&in_status=active,inactive&min<age=18&with_profile=true&order_by_desc=created_at&per_page=20
```

### Création avec validation personnalisée

```php
// POST /api/users
{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
}
```

### Réponse formatée

```json
{
    "status": 201,
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "age": 25,
            "created_at": "2024-01-01T00:00:00.000000Z",
            "updated_at": "2024-01-01T00:00:00.000000Z"
        }
    },
    "messages": []
}
```

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository GitHub.

## Licence

Cette librairie est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
