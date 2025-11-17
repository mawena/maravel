# Maravel

![Version](https://img.shields.io/badge/version-2.4.7-blue.svg)
![PHP](https://img.shields.io/badge/php-%5E8.1%7C%5E8.2%7C%5E8.3%7C%5E8.4-777BB4.svg)
![Laravel](https://img.shields.io/badge/laravel-%5E10.0%7C%5E11.0%7C%5E12.0-FF2D20.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Maravel** est une librairie Laravel avancée qui accélère le développement d'API REST en fournissant un contrôleur générique avec CRUD complet, un système de permissions sophistiqué, des modèles enrichis avec formatage automatique, et des commandes Artisan pour générer du code prêt à l'emploi.

## Table des matières

- [Fonctionnalités principales](#fonctionnalités-principales)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage rapide](#démarrage-rapide)
- [Utilisation avancée](#utilisation-avancée)
  - [APIController](#apicontroller)
  - [ModelBase](#modelbase)
  - [BasePolicy](#basepolicy)
  - [Traits disponibles](#traits-disponibles)
  - [Commandes Artisan](#commandes-artisan)
- [Filtres avancés](#filtres-avancés)
- [Système de permissions](#système-de-permissions)
- [Hooks et callbacks](#hooks-et-callbacks)
- [Exemples complets](#exemples-complets)
- [Tests](#tests)
- [Changelog](#changelog)
- [Contribution](#contribution)
- [License](#license)

---

## Fonctionnalités principales

### 🚀 APIController générique
- **CRUD complet** : Toutes les opérations (index, show, store, update, destroy) prêtes à l'emploi
- **Création multiple** : Méthode `store_multiple()` pour créer plusieurs enregistrements en une seule requête
- **Filtrage automatique** : Filtres basiques, min/max, IN/NOT IN, relations, recherche textuelle, JSON
- **Pagination intelligente** : Pagination automatique ou désactivable avec paramètres configurables
- **Tri dynamique** : Tri ascendant/descendant sur n'importe quelle colonne
- **Gestion des relations** : Chargement automatique des relations Eloquent via paramètres d'URL

### 🔐 Système de permissions avancé
- **BasePolicy** : Classe de base pour créer des policies sophistiquées
- **Permissions par profil** : Support des profils utilisateur (admin, user, etc.)
- **Règles d'abilités** : Système de règles avec sujets et actions (CASL-like)
- **PermissionCheckerTrait** : Méthodes helper pour vérifier les permissions facilement
- **Admin bypass** : Les administrateurs ont accès complet automatiquement

### 📦 ModelBase enrichi
- **Formatage automatique des dates** : Conversion automatique avec localisation française
- **Formatage des montants** : Affichage des valeurs monétaires avec devise
- **Conversion des booléens** : Transformation en format lisible
- **Traduction des énumérations** : Support des enums avec traduction
- **Formatage des décimaux** : Notation française avec virgule
- **Méthodes dynamiques** : Ajout de casts personnalisés à la volée

### 🛠️ Commandes Artisan
- `maravel:install` : Installe et configure automatiquement Maravel (API, AuthController, config)
- `make:maravel.controller` : Génère un contrôleur API complet avec CRUD, validation, hooks
- `make:maravel.model` : Génère un modèle avec ModelBase et formatage automatique
- `make:maravel.policy` : Génère une policy avancée avec système de permissions
- **Note** : Les commandes Laravel par défaut (`make:controller`, `make:model`, `make:policy`) restent disponibles

### ⚡ Traits réutilisables
- **ModelTrait** : Formatage automatique des données (dates, money, enums, booleans)
- **CustomResponseTrait** : Formatage standardisé des réponses JSON avec encodage UTF-8
- **ControllerHelperTrait** : Méthodes utilitaires pour les filtres, recherches, et fichiers
- **PermissionCheckerTrait** : Vérification des permissions simplifiée
- **ScriptGeneratorTrait** : Génération de code automatique

---

## Prérequis

- **PHP** : 8.1, 8.2, 8.3 ou 8.4
- **Laravel** : 10.x, 11.x ou 12.x
- **Composer** : 2.x

---

## Installation

Installez la librairie via Composer :

```bash
composer require mawena/maravel
```

Le service provider sera automatiquement enregistré grâce à l'auto-discovery de Laravel.

### Installation automatique

Une fois la librairie installée, lancez la commande d'installation pour configurer automatiquement votre projet :

```bash
php artisan maravel:install
```

Cette commande effectue automatiquement les actions suivantes :
- 📦 Installation de Laravel Sanctum et configuration API (`php artisan install:api`)
- 🔐 Création du contrôleur `AuthController` dans `app/Http/Controllers/API/`
- 🛣️ Configuration automatique du fichier `routes/api.php` avec les routes d'authentification
- 👤 Création de la migration pour ajouter la colonne `profile` à la table `users`
- 🔧 Configuration du modèle `User` pour hériter de `AuthenticatableBase`
- ⚙️ Publication du fichier de configuration `config/advanced-api-controller.php`

Le contrôleur `AuthController` créé inclut les méthodes suivantes :
- `login()` : Authentification des utilisateurs
- `data()` : Récupération des données de l'utilisateur connecté
- `logout()` : Déconnexion de l'utilisateur

Le modèle `User` est automatiquement configuré avec :
- Héritage de `AuthenticatableBase` (au lieu de `Authenticatable`)
- Champ `profile` dans `$fillable`
- Casts d'énumération pour le profil (`admin` → Administrateur, `user` → Utilisateur)
- Méthode `getAbilityRulesAttribute()` pour le système de permissions
- Attribut `ability_rules` dans `$appends`

**Routes configurées automatiquement** dans `routes/api.php` :
```php
use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post("auth/login", "login");

    Route::middleware('auth:sanctum')->group(function () {
        Route::prefix("/auth")->name("auth.")->group(function () {
            Route::get('data', "data")->name("data");
            Route::delete('logout', "logout")->name("logout");
        });

        //Route suplémentaire sous autorisation
    });
});
```

**Endpoints disponibles** :
- `POST /api/auth/login` - Connexion
- `GET /api/auth/data` - Données utilisateur (authentifié)
- `DELETE /api/auth/logout` - Déconnexion (authentifié)

**Migration créée** : `xxxx_xx_xx_xxxxxx_add_profile_to_users_table.php`
```php
Schema::table('users', function (Blueprint $table) {
    $table->enum('profile', ['admin', 'other'])->default('other')->after('email');
});
```

**Système de permissions** : Le modèle User est configuré avec un système de permissions basé sur les profils :
- **admin** : Accès complet à toutes les ressources (`['subject' => ['all'], 'action' => ['manage']]`)
- **other** : Pas de permissions par défaut (à personnaliser selon vos besoins)

Vous pouvez étendre les permissions en modifiant la méthode `getAbilityRulesAttribute()` dans `app/Models/User.php`.

### Publication manuelle de la configuration (optionnel)

Si vous souhaitez uniquement publier le fichier de configuration sans exécuter l'installation complète :

```bash
php artisan vendor:publish --provider="Maravel\Providers\AdvancedApiControllerServiceProvider" --tag="advanced-api-controller-config"
```

Cela créera le fichier `config/advanced-api-controller.php`.

---

## Configuration

Le fichier de configuration `config/advanced-api-controller.php` vous permet de personnaliser :

### Defaults (Paramètres par défaut)

```php
'defaults' => [
    'pagination' => [
        'per_page' => 8,           // Nombre d'éléments par page
        'max_per_page' => 100,     // Maximum d'éléments par page
    ],
    'validation' => [
        'store' => [],             // Règles de validation par défaut pour store
        'update' => [],            // Règles de validation par défaut pour update
    ],
    'authorization' => [
        'ability_read' => 'read',
        'ability_create' => 'create',
        'ability_update' => 'update',
        'ability_delete' => 'delete',
    ],
],
```

### Filters (Configuration des filtres)

```php
'filters' => [
    'enabled' => true,
    'types' => [
        'basic' => true,           // Filtres basiques: ?name=value
        'min_max' => true,         // Filtres min/max: ?min<age=18
        'in_not_in' => true,       // Filtres IN/NOT IN: ?in_status=active-pending
        'relations' => true,       // Filtres sur relations
        'search' => true,          // Recherche textuelle: ?search=keyword
        'json' => true,            // Filtres JSON
    ],
],
```

### Models (Configuration des modèles)

```php
'models' => [
    'use_model_base' => true,
    'date_format' => 'd/m/Y H:i:s',
    'money_format' => [
        'currency' => 'XOF',
        'decimal_separator' => ',',
        'thousands_separator' => ' ',
    ],
    'auto_casts' => [
        'created_at' => true,
        'updated_at' => true,
    ],
],
```

### Permissions (Configuration des permissions)

```php
'permissions' => [
    'enabled' => true,
    'use_advanced_policies' => true,
    'admin_profile' => 'admin',
    'check_permissions' => true,
],
```

---

## Démarrage rapide

### 1. Créer un contrôleur

```bash
php artisan make:maravel.controller ProductController
```

### 2. Définir le modèle et la validation

```php
namespace App\Http\Controllers\API;

use Maravel\Http\Controllers\APIController;
use App\Models\Product;

class ProductController extends APIController
{
    protected string $modelClass = Product::class;

    protected array $storeValidationArray = [
        'name' => 'required|string|max:255',
        'price' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
    ];

    protected array $updateValidationArray = [
        'name' => 'string|max:255',
        'price' => 'numeric|min:0',
        'stock' => 'integer|min:0',
    ];

    protected array $indexSearchFieldList = ['name', 'description'];
}
```

### 3. Créer les routes

```php
use App\Http\Controllers\API\ProductController;

Route::apiResource('products', ProductController::class);
```

### 4. C'est prêt!

Votre API est maintenant opérationnelle avec :

- **GET** `/api/products` - Liste tous les produits
- **GET** `/api/products/{id}` - Affiche un produit
- **POST** `/api/products` - Crée un produit
- **PUT/PATCH** `/api/products/{id}` - Modifie un produit
- **DELETE** `/api/products/{id}` - Supprime un produit

---

## Utilisation avancée

### APIController

Le contrôleur de base fournit toutes les méthodes CRUD et de nombreuses options de personnalisation.

#### Propriétés disponibles

```php
class ProductController extends APIController
{
    // OBLIGATOIRE : Classe du modèle Eloquent
    protected string $modelClass = Product::class;

    // Validation pour la création
    protected array $storeValidationArray = [];

    // Validation pour la mise à jour
    protected array $updateValidationArray = [];

    // Champs de recherche textuelle
    protected array $indexSearchFieldList = [];

    // Relations à charger automatiquement
    protected array $indexWithArray = [];
    protected array $showWithArray = [];

    // Nom de l'abilité pour les permissions
    protected string $readAbilityName = 'read';
    protected string $createAbilityName = 'create';
    protected string $updateAbilityName = 'update';
    protected string $deleteAbilityName = 'delete';

    // Activation/désactivation des permissions
    protected bool $indexCheckAbility = true;
    protected bool $showCheckAbility = true;
    protected bool $storeCheckAbility = true;
    protected bool $updateCheckAbility = true;
    protected bool $deleteCheckAbility = true;
}
```

#### Méthodes disponibles

- `index(Request $request)` : Liste les ressources avec filtrage, recherche, tri, pagination
- `show($id, Request $request)` : Affiche une ressource spécifique
- `store(Request $request)` : Crée une nouvelle ressource
- `store_multiple(Request $request)` : Crée plusieurs ressources en une fois
- `update(Request $request, $id)` : Met à jour une ressource
- `destroy($id)` : Supprime une ressource

---

### ModelBase

Utilisez `ModelBase` comme classe parente pour vos modèles afin de bénéficier du formatage automatique.

```php
namespace App\Models;

use Maravel\Models\ModelBase;

class Product extends ModelBase
{
    protected $fillable = ['name', 'price', 'stock', 'description'];

    // Définir les casts personnalisés
    protected array $dateCasts = [
        'published_at' => 'd/m/Y',  // Format personnalisé
    ];

    protected array $moneyCasts = [
        'price',                     // Formaté avec la config par défaut
    ];

    protected array $booleanCasts = [
        'is_active',                 // Formaté en 'Oui'/'Non'
    ];

    protected array $enumCasts = [
        'status' => [
            'active' => 'Actif',
            'inactive' => 'Inactif',
            'pending' => 'En attente',
        ],
    ];
}
```

#### Méthodes dynamiques

Ajoutez des casts à la volée :

```php
$product = Product::find(1);

// Ajouter un cast date
$product->addDateCast('last_order_at', 'd/m/Y H:i');

// Ajouter un cast money
$product->addMoneyCast('cost');

// Ajouter un cast enum
$product->addEnumCast('type', [
    'physical' => 'Produit physique',
    'digital' => 'Produit numérique',
]);
```

#### Attributs automatiques

Les attributs suivants sont automatiquement ajoutés :

- `created_at_fr` : Date de création formatée
- `updated_at_fr` : Date de mise à jour formatée
- `{field}_formatted` : Version formatée de chaque cast

---

### ModelTrait

Le coeur du système de formatage. Ce trait est utilisé par `ModelBase` et `AuthenticatableBase`.

#### Fonctionnalités du trait

```php
use Maravel\Models\ModelTrait;

class MyModel extends Model
{
    use ModelTrait;

    protected $dateCasts = ['published_at' => 'd/m/Y'];
    protected $moneyCasts = ['price', 'cost'];
    protected $booleanCasts = ['is_active'];
    protected $enumCasts = [
        'status' => ['draft' => 'Brouillon', 'published' => 'Publié']
    ];
}
```

#### Méthodes disponibles

- `addDateCast($column, $format)` : Ajoute un cast de date dynamiquement
- `addMoneyCast($column)` : Ajoute un cast monétaire dynamiquement
- `addBooleanCast($column)` : Ajoute un cast booléen dynamiquement
- `addEnumCast($column, $choices)` : Ajoute un cast enum dynamiquement
- `addFloatCast($column)` : Ajoute un cast float dynamiquement
- `addBigIntegerCast($column)` : Ajoute un cast big integer dynamiquement

#### Utilisation directe du trait

Vous pouvez utiliser `ModelTrait` directement sans hériter de `ModelBase` :

```php
use Illuminate\Database\Eloquent\Model;
use Maravel\Models\ModelTrait;

class Product extends Model
{
    use ModelTrait; // Utilisation directe du trait

    protected $dateCasts = ['launched_at' => 'd/m/Y'];
    protected $moneyCasts = ['price'];
}
```

---

### AuthenticatableBase

Pour les modèles nécessitant l'authentification (comme User), Maravel fournit `AuthenticatableBase`.

#### Créer un modèle User

```bash
php artisan make:maravel.model User --authenticatable -m
```

#### Exemple de modèle User

```php
namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Maravel\Models\AuthenticatableBase;

class User extends AuthenticatableBase
{
    use HasApiTokens, Notifiable;

    protected $fillable = ['name', 'email', 'password', 'profile'];
    protected $hidden = ['password', 'remember_token'];

    // Casts d'énumération pour le profil
    protected $enumCasts = [
        'profile' => [
            'admin' => 'Administrateur',
            'user' => 'Utilisateur',
            'manager' => 'Gestionnaire',
        ],
    ];

    /**
     * Règles d'abilités pour le système de permissions
     */
    public function getAbilityRulesAttribute(): array
    {
        return match($this->profile) {
            'admin' => [
                ['subject' => ['all'], 'action' => ['manage']],
            ],
            'manager' => [
                ['subject' => ['product', 'order'], 'action' => ['read', 'create', 'update']],
            ],
            'user' => [
                ['subject' => ['product'], 'action' => ['read']],
                ['subject' => ['order'], 'action' => ['read', 'create']],
            ],
            default => [],
        };
    }

    /**
     * Vérifie si l'utilisateur est administrateur
     */
    public function isAdmin(): bool
    {
        return $this->profile === 'admin';
    }
}
```

#### Avantages d'AuthenticatableBase

- ✅ **Compatible avec l'authentification Laravel** : Étend `Illuminate\Foundation\Auth\User`
- ✅ **Formatage automatique** : Utilise ModelTrait pour les mêmes fonctionnalités que ModelBase
- ✅ **Support Sanctum** : Compatible avec Laravel Sanctum pour les API
- ✅ **Permissions intégrées** : Système d'abilités prêt à l'emploi
- ✅ **Méthodes utilitaires** : isAdmin(), hasProfile() générées automatiquement

#### Architecture

```
ModelTrait (trait commun)
    ├── ModelBase (pour modèles standards)
    │   └── extends Model
    │
    └── AuthenticatableBase (pour authentification)
        └── extends Authenticatable
```

Les deux classes utilisent le même trait `ModelTrait`, évitant ainsi la duplication de code.

---

### BasePolicy

Créez des policies avancées avec système de permissions.

#### Créer une policy

```bash
php artisan make:maravel.policy ProductPolicy
```

#### Exemple de policy

```php
namespace App\Policies;

use Maravel\Policies\BasePolicy;
use App\Models\User;
use App\Models\Product;

class ProductPolicy extends BasePolicy
{
    // Le sujet pour les vérifications de permissions
    protected string $subject = 'product';

    // Méthode before() pour vérifications globales
    public function before(User $user, string $ability): ?bool
    {
        // Les admins ont tous les droits
        if ($user->profile === 'admin') {
            return true;
        }

        return null; // Continuer les vérifications normales
    }

    // Permission personnalisée
    public function publish(User $user, Product $product): bool
    {
        return $this->checkCustomPermission($user, ['publish'], $this->subject)
            && $product->user_id === $user->id;
    }
}
```

#### Enregistrer la policy

Dans `AuthServiceProvider.php` :

```php
use App\Models\Product;
use App\Policies\ProductPolicy;

protected $policies = [
    Product::class => ProductPolicy::class,
];
```

---

### Traits disponibles

#### CustomResponseTrait

Formatage standardisé des réponses JSON :

```php
use Maravel\Http\Traits\CustomResponseTrait;

class MyController extends Controller
{
    use CustomResponseTrait;

    public function index()
    {
        $data = ['items' => [...]];
        return $this->responseOk($data, ['Success'], 200);
    }

    public function error()
    {
        return $this->responseError(['field' => ['Error message']], 400);
    }
}
```

#### ControllerHelperTrait

Méthodes utilitaires pour les contrôleurs :

```php
use Maravel\Http\Traits\ControllerHelperTrait;

class MyController extends Controller
{
    use ControllerHelperTrait;

    public function index(Request $request)
    {
        $query = Product::query();

        // Ajouter des filtres
        $query = $this->queryFilter($query, $request->all(), 'Product');

        // Ajouter recherche
        $query = $this->querySearch($query, ['name', 'description'], $request->search);

        // Ajouter relations
        $query = $this->queryRelationAdd($query, $request->all(), 'Product');

        return $query->get();
    }
}
```

#### PermissionCheckerTrait

Vérification simplifiée des permissions :

```php
use Maravel\Http\Traits\PermissionCheckerTrait;

class MyController extends Controller
{
    use PermissionCheckerTrait;

    public function index(Request $request)
    {
        $user = $request->user();

        if (!$this->canRead('product', $user)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        if ($this->isAdmin($user)) {
            // Logique admin
        }

        return Product::all();
    }
}
```

---

### Commandes Artisan

Maravel fournit plusieurs commandes personnalisées qui **coexistent** avec les commandes Laravel standard. Les commandes par défaut (`make:controller`, `make:policy`) restent disponibles et fonctionnelles.

#### maravel:install

Installe et configure automatiquement Maravel dans votre projet Laravel :

```bash
php artisan maravel:install
```

**Ce qui est exécuté automatiquement** :
- ✅ Installation de Laravel Sanctum et configuration API (`php artisan install:api`)
- ✅ Création du contrôleur AuthController dans `app/Http/Controllers/API/`
- ✅ Configuration automatique des routes d'authentification dans `routes/api.php`
- ✅ Création de la migration pour ajouter la colonne `profile` (enum: admin, other)
- ✅ Configuration du modèle User avec AuthenticatableBase et système de permissions
- ✅ Publication du fichier de configuration `config/advanced-api-controller.php`

**Avantages** :
- Configuration rapide et sans erreur
- AuthController prêt à l'emploi avec login, logout et récupération des données utilisateur
- Routes d'authentification configurées automatiquement (plus besoin de les ajouter manuellement)
- Support complet de Laravel Sanctum pour l'authentification API
- Structure de routes organisée avec groupes et préfixes
- Système de permissions prêt à l'emploi avec profils utilisateur (admin, user)
- Modèle User configuré avec AuthenticatableBase et ability_rules

**Recommandation** : Lancez cette commande immédiatement après `composer require mawena/maravel` pour configurer votre projet en une seule commande.

#### make:maravel.controller

Génère un contrôleur API complet avec APIController :

```bash
php artisan make:maravel.controller ProductController
```

**Ce qui est généré** :
- Toutes les méthodes CRUD prêtes à l'emploi
- Système de validation avancé
- Hooks (before/after create, update, delete)
- Documentation PHPDoc complète
- Gestion des permissions intégrée
- Support automatique des filtres et pagination

**Emplacement** : `App\Http\Controllers\API\ProductController.php`

#### make:maravel.model

Génère un modèle avec ModelBase ou AuthenticatableBase :

```bash
# Modèle standard avec ModelBase
php artisan make:maravel.model Product

# Modèle User avec AuthenticatableBase (pour l'authentification)
php artisan make:maravel.model User --authenticatable
```

**Ce qui est généré** :
- Extension de ModelBase (ou AuthenticatableBase avec option `-a`)
- Formatage automatique des dates (created_at_fr, updated_at_fr)
- Support des casts personnalisés ($dateCasts, $moneyCasts, $enumCasts, $booleanCasts)
- Relations Eloquent commentées (exemples)
- Scopes commentés (exemples)
- Méthodes utilitaires (pour User: isAdmin(), hasProfile())

**Emplacement** : `App\Models\Product.php`

**Options disponibles** :
- `-m` ou `--migration` : Crée automatiquement la migration
- `-c` ou `--controller` : Crée automatiquement le contrôleur API
- `-p` ou `--policy` : Crée automatiquement la policy
- `-a` ou `--authenticatable` : Crée un modèle Authenticatable (User)
- `--all` : Crée migration, contrôleur et policy en une seule commande

**Exemples** :
```bash
# Créer un modèle avec migration
php artisan make:maravel.model Product -m

# Créer un modèle avec tout (migration, controller, policy)
php artisan make:maravel.model Product --all

# Créer un modèle User avec authentification
php artisan make:maravel.model User --authenticatable -m

# Créer un modèle avec controller et policy
php artisan make:maravel.model Post -cp
```

#### make:maravel.policy

Génère une policy avancée avec BasePolicy :

```bash
php artisan make:maravel.policy ProductPolicy
```

**Ce qui est généré** :
- Toutes les méthodes de permissions (viewAny, view, create, update, delete, restore, forceDelete)
- Méthode `before()` pour vérifications globales
- Support des permissions personnalisées
- Système de règles d'abilités
- Documentation PHPDoc complète

**Emplacement** : `App\Policies\ProductPolicy.php`

#### Différence avec les commandes Laravel standard

| Commande | Description |
|----------|-------------|
| `maravel:install` | **Commande unique Maravel** - installe et configure automatiquement Maravel (API + AuthController + config) |
| `make:controller` | Commande Laravel standard - génère un contrôleur vide |
| `make:maravel.controller` | Commande Maravel - génère un contrôleur API complet avec APIController |
| `make:model` | Commande Laravel standard - génère un modèle basique |
| `make:maravel.model` | Commande Maravel - génère un modèle avec ModelBase et formatage automatique |
| `make:policy` | Commande Laravel standard - génère une policy basique |
| `make:maravel.policy` | Commande Maravel - génère une policy avancée avec BasePolicy |

#### Exemples d'utilisation complète

```bash
# Installation initiale de Maravel
composer require mawena/maravel
php artisan maravel:install  # Configure automatiquement l'API et crée AuthController

# Workflow complet : Créer un modèle avec tout
php artisan make:maravel.model Product --all
# Cela crée : Model + Migration + Controller + Policy

# Workflow étape par étape
php artisan make:maravel.model Product -m        # Modèle + Migration
php artisan make:maravel.controller Product      # Contrôleur
php artisan make:maravel.policy Product          # Policy

# Créer un contrôleur dans un sous-dossier
php artisan make:maravel.controller API/V2/ProductController

# Créer un modèle User avec authentification
php artisan make:maravel.model User -a -m

# Workflow pour un modèle de blog complet
php artisan make:maravel.model Post --all
# Éditer la migration, puis :
php artisan migrate
```

---

## Filtres avancés

L'APIController supporte plusieurs types de filtres via l'URL :

### Filtres basiques

Filtrer par égalité :

```
GET /api/products?name=iPhone&category_id=2
```

### Filtres min/max

Filtrer par plage de valeurs :

```
GET /api/products?min<price=100&max<price=500
GET /api/products?min<stock=10
```

### Filtres IN/NOT IN

Filtrer par liste de valeurs :

```
GET /api/products?in_status=active-pending-draft
GET /api/products?not_in_category_id=1-2-3
```

### Recherche textuelle

Rechercher dans plusieurs champs :

```
GET /api/products?search=iPhone
```

Les champs de recherche sont définis dans `$indexSearchFieldList`.

### Chargement des relations

Charger des relations Eloquent :

```
GET /api/products?with_category=true&with_reviews=true
```

Relations imbriquées :

```
GET /api/products?with_category<images=true
```

### Tri

Trier les résultats :

```
GET /api/products?order_by_desc=created_at
GET /api/products?order_by_asc=name
GET /api/products?order_by_desc=price-stock
```

### Pagination

Contrôler la pagination :

```
GET /api/products?per_page=20
GET /api/products?page=2
GET /api/products?paginate=false
```

### Combinaison de filtres

Combiner plusieurs filtres :

```
GET /api/products?search=phone&min<price=100&max<price=1000&in_status=active-featured&with_category=true&order_by_desc=created_at&per_page=20
```

---

## Système de permissions

Maravel utilise un système de permissions flexible basé sur les profils et les règles d'abilités.

### Structure des ability_rules

Les utilisateurs doivent avoir un attribut `ability_rules` qui est un tableau de règles :

```php
$user->ability_rules = [
    [
        'subject' => ['product', 'category'],  // Sujets concernés
        'action' => ['read', 'create'],         // Actions autorisées
    ],
    [
        'subject' => ['all'],                   // Tous les sujets
        'action' => ['read'],                   // Action lecture uniquement
    ],
];
```

### Actions disponibles

- `read` : Lecture (viewAny, view)
- `create` : Création
- `update` : Mise à jour
- `delete` : Suppression
- `manage` : Toutes les actions
- Personnalisées : Vous pouvez définir vos propres actions

### Profils utilisateur

L'attribut `profile` détermine le niveau d'accès :

```php
$user->profile = 'admin';  // Accès complet à tout
$user->profile = 'user';   // Accès limité selon ability_rules
```

### Vérification des permissions

#### Dans les contrôleurs

```php
use Maravel\Http\Traits\PermissionCheckerTrait;

public function index(Request $request)
{
    if (!$this->canRead('product', $request->user())) {
        abort(403, 'Unauthorized');
    }

    return Product::all();
}
```

#### Dans les policies

```php
public function update(User $user, Product $product): bool
{
    return $this->checkCustomPermission($user, ['update'], 'product')
        && $product->user_id === $user->id;
}
```

#### Dans les vues Blade

```blade
@can('update', $product)
    <a href="/products/{{ $product->id }}/edit">Edit</a>
@endcan
```

---

## Hooks et callbacks

L'APIController propose de nombreux hooks pour personnaliser le comportement.

### Hooks de création

```php
class ProductController extends APIController
{
    // Validation personnalisée
    protected function storeManualValidationsFunction(array $data): array
    {
        if ($data['price'] > 10000) {
            return ['price' => ['Le prix ne peut pas dépasser 10000']];
        }
        return [];
    }

    // Avant la création
    protected function storeBeforeCreateFunction(array $data): array
    {
        $data['slug'] = Str::slug($data['name']);
        return $data;
    }

    // Après la création
    protected function storeAfterCreateFunction($model): void
    {
        // Envoyer un email
        Mail::to('admin@example.com')->send(new ProductCreated($model));
    }

    // Avant le commit en base de données
    protected function storeBeforeCommitFunction($model): void
    {
        // Logique métier
    }

    // Après le commit
    protected function storeAfterCommitFunction($model): void
    {
        // Créer des enregistrements liés
        $model->history()->create(['action' => 'created']);
    }
}
```

### Hooks de mise à jour

```php
class ProductController extends APIController
{
    // Validation personnalisée
    protected function updateManualValidationsFunction(array $data, $model): array
    {
        if (isset($data['price']) && $data['price'] < $model->cost) {
            return ['price' => ['Le prix ne peut pas être inférieur au coût']];
        }
        return [];
    }

    // Avant la mise à jour
    protected function updateBeforeUpdateFunction(array $data, $model): array
    {
        if (isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }
        return $data;
    }

    // Après la mise à jour
    protected function updateAfterUpdateFunction($model): void
    {
        Cache::forget("product_{$model->id}");
    }
}
```

### Hooks de suppression

```php
class ProductController extends APIController
{
    // Avant la suppression
    protected function deleteBeforeDeleteFunction($model): void
    {
        // Supprimer les fichiers associés
        Storage::delete($model->images->pluck('path')->toArray());
    }

    // Après la suppression
    protected function deleteAfterDeleteFunction($model): void
    {
        // Logger la suppression
        Log::info("Product {$model->id} deleted");
    }
}
```

### Filtre manuel sur index

```php
class ProductController extends APIController
{
    protected function indexManualFilter($query, array $requestData)
    {
        // Ajouter des filtres personnalisés complexes
        if (isset($requestData['category_slug'])) {
            $query->whereHas('category', function ($q) use ($requestData) {
                $q->where('slug', $requestData['category_slug']);
            });
        }

        return $query;
    }
}
```

---

## Exemples complets

### Exemple 1 : API de blog

#### Modèle

```php
namespace App\Models;

use Maravel\Models\ModelBase;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends ModelBase
{
    protected $fillable = ['title', 'content', 'user_id', 'published_at', 'status'];

    protected array $dateCasts = [
        'published_at' => 'd/m/Y H:i',
    ];

    protected array $enumCasts = [
        'status' => [
            'draft' => 'Brouillon',
            'published' => 'Publié',
            'archived' => 'Archivé',
        ],
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

#### Contrôleur

```php
namespace App\Http\Controllers\API;

use Maravel\Http\Controllers\APIController;
use App\Models\Post;
use Illuminate\Support\Str;

class PostController extends APIController
{
    protected string $modelClass = Post::class;

    protected array $storeValidationArray = [
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'status' => 'in:draft,published,archived',
    ];

    protected array $updateValidationArray = [
        'title' => 'string|max:255',
        'content' => 'string',
        'status' => 'in:draft,published,archived',
    ];

    protected array $indexSearchFieldList = ['title', 'content'];
    protected array $indexWithArray = ['user'];

    protected function storeBeforeCreateFunction(array $data): array
    {
        $data['slug'] = Str::slug($data['title']);
        $data['user_id'] = auth()->id();

        if ($data['status'] === 'published' && !isset($data['published_at'])) {
            $data['published_at'] = now();
        }

        return $data;
    }

    protected function indexManualFilter($query, array $requestData)
    {
        // Seuls les posts publiés pour les non-admins
        if (!auth()->user()?->isAdmin()) {
            $query->where('status', 'published');
        }

        return $query;
    }
}
```

#### Routes

```php
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('posts', PostController::class);
});
```

#### Utilisation

```bash
# Lister les posts publiés avec leurs auteurs
GET /api/posts?with_user=true&in_status=published&order_by_desc=published_at

# Rechercher dans les posts
GET /api/posts?search=Laravel

# Créer un post
POST /api/posts
{
    "title": "Mon premier article",
    "content": "Contenu de l'article...",
    "status": "draft"
}
```

---

### Exemple 2 : E-commerce avec permissions

#### Modèle Product

```php
namespace App\Models;

use Maravel\Models\ModelBase;

class Product extends ModelBase
{
    protected $fillable = ['name', 'description', 'price', 'cost', 'stock', 'is_active'];

    protected array $moneyCasts = ['price', 'cost'];
    protected array $booleanCasts = ['is_active'];
}
```

#### Policy

```php
namespace App\Policies;

use Maravel\Policies\BasePolicy;
use App\Models\User;
use App\Models\Product;

class ProductPolicy extends BasePolicy
{
    protected string $subject = 'product';

    public function before(User $user, string $ability): ?bool
    {
        if ($user->profile === 'admin') {
            return true;
        }

        return null;
    }

    public function viewAny(User $user): bool
    {
        // Tout le monde peut voir les produits
        return true;
    }

    public function create(User $user): bool
    {
        return $this->checkCustomPermission($user, ['create'], $this->subject);
    }

    public function update(User $user, Product $product): bool
    {
        return $this->checkCustomPermission($user, ['update'], $this->subject);
    }

    public function updatePrice(User $user, Product $product): bool
    {
        // Seuls les admins et managers peuvent modifier les prix
        return in_array($user->profile, ['admin', 'manager']);
    }
}
```

#### Contrôleur

```php
namespace App\Http\Controllers\API;

use Maravel\Http\Controllers\APIController;
use App\Models\Product;

class ProductController extends APIController
{
    protected string $modelClass = Product::class;

    protected array $storeValidationArray = [
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'price' => 'required|numeric|min:0',
        'cost' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
        'is_active' => 'boolean',
    ];

    protected array $updateValidationArray = [
        'name' => 'string|max:255',
        'description' => 'nullable|string',
        'price' => 'numeric|min:0',
        'cost' => 'numeric|min:0',
        'stock' => 'integer|min:0',
        'is_active' => 'boolean',
    ];

    protected array $indexSearchFieldList = ['name', 'description'];

    protected bool $indexCheckAbility = false; // Désactiver pour viewAny

    protected function updateManualValidationsFunction(array $data, $model): array
    {
        // Vérifier la permission pour modifier le prix
        if (isset($data['price'])) {
            if (!auth()->user()->can('updatePrice', $model)) {
                return ['price' => ['Vous n\'avez pas la permission de modifier le prix']];
            }
        }

        // Vérifier que le prix est supérieur au coût
        if (isset($data['price']) && $data['price'] < ($data['cost'] ?? $model->cost)) {
            return ['price' => ['Le prix doit être supérieur au coût']];
        }

        return [];
    }

    protected function storeAfterCommitFunction($model): void
    {
        // Créer l'historique de stock
        $model->stockHistory()->create([
            'quantity' => $model->stock,
            'type' => 'initial',
            'user_id' => auth()->id(),
        ]);
    }
}
```

#### Configuration des ability_rules

```php
// Pour un utilisateur "manager"
$user->ability_rules = [
    [
        'subject' => ['product'],
        'action' => ['read', 'create', 'update'],
    ],
];

// Pour un utilisateur "seller"
$user->ability_rules = [
    [
        'subject' => ['product'],
        'action' => ['read'],
    ],
];
```

---

## Tests

La librairie inclut des tests PHPUnit pour assurer la qualité du code.

### Exécuter les tests

```bash
composer test
```

### Tests disponibles

- Tests du contrôleur API (CRUD complet)
- Tests des filtres (basiques, min/max, IN/NOT IN, etc.)
- Tests de la pagination
- Tests des relations
- Tests de validation
- Tests des permissions
- Tests des hooks

---

## Changelog

Consultez le fichier [CHANGELOG.md](CHANGELOG.md) pour voir l'historique complet des modifications.

---

## Contribution

Les contributions sont les bienvenues! Voici comment contribuer :

1. **Fork** le projet
2. Créez votre **branche de fonctionnalité** (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Guidelines

- Suivez les conventions de codage PSR-12
- Ajoutez des tests pour les nouvelles fonctionnalités
- Mettez à jour la documentation si nécessaire
- Assurez-vous que tous les tests passent

---

## License

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

Copyright (c) 2024 Charles GAMLIGO

---

## Auteur

**Charles GAMLIGO** (Mawena)
- Email: gamligocharles@gmail.com
- GitHub: [@mawena](https://github.com/mawena)

---

## Support

- **Issues**: [GitHub Issues](https://github.com/mawena/maravel/issues)
- **Source**: [GitHub Repository](https://github.com/mawena/maravel)

---

## Remerciements

Merci à tous les contributeurs qui ont participé au développement de cette librairie.

---

**Maravel** - Accélérez votre développement d'API Laravel avec élégance et puissance.
