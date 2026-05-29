# Maravel

![Version](https://img.shields.io/badge/version-2.9.0-blue.svg)
![PHP](https://img.shields.io/badge/php-%5E8.1%7C%5E8.2%7C%5E8.3%7C%5E8.4-777BB4.svg)
![Laravel](https://img.shields.io/badge/laravel-%5E10.0%7C%5E11.0%7C%5E12.0%7C%5E13.0-FF2D20.svg)
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
- [Filtrage dynamique des champs (Headers)](#filtrage-dynamique-des-champs-headers)
- [Codes de statut HTTP (REST)](#codes-de-statut-http-rest)
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
- **Reducers personnalisés** : Transformations post-requête via méthodes reducer dans les modèles
- **Upload de gros fichiers** : Méthodes `uploadChunk()` et `mergeChunks()` pour fichiers volumineux
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
- **Big integers** : Conversion en int + formatage avec séparateurs de milliers (ex: 1 500 000)
- **Méthodes dynamiques** : Ajout de casts personnalisés à la volée

### 🛠️ Commandes Artisan
- `maravel:install` : Installe et configure automatiquement Maravel (API, AuthController, config)
- `make:maravel.controller` : Génère un contrôleur API complet avec CRUD, validation, hooks
- `make:maravel.model` : Génère un modèle avec ModelBase et formatage automatique
- `make:maravel.policy` : Génère une policy avancée avec système de permissions
- **Note** : Les commandes Laravel par défaut (`make:controller`, `make:model`, `make:policy`) restent disponibles

### ⚡ Traits réutilisables
- **ModelTrait** : Formatage automatique des données (dates, money, enums, booleans, big integers)
- **CustomResponseTrait** : Formatage standardisé des réponses JSON avec encodage UTF-8
- **ControllerHelperTrait** : Méthodes utilitaires pour les filtres, recherches, reducers et fichiers
- **PermissionCheckerTrait** : Vérification des permissions simplifiée
- **ScriptGeneratorTrait** : Génération de code automatique

---

## Prérequis

- **PHP** : 8.1, 8.2, 8.3 ou 8.4
- **Laravel** : 10.x, 11.x, 12.x ou 13.x
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
- 👥 Création du contrôleur `UserController` avec gestion du changement de mot de passe
- 🛡️ Création de la policy `UserPolicy` pour les permissions utilisateurs
- 🛣️ Configuration automatique du fichier `routes/api.php` avec les routes d'authentification et utilisateurs
- 👤 Création de la migration pour ajouter la colonne `profile` à la table `users`
- 🔒 Création de la migration pour ajouter les colonnes `activated` et `password_change_required`
- 🔧 Configuration du modèle `User` pour hériter de `AuthenticatableBase`
- 🛡️ Intégration du middleware `AccountStatusMiddleware` pour vérifier le statut des comptes
- ⚙️ Publication du fichier de configuration `config/advanced-api-controller.php`

#### ✨ Fusion intelligente des fichiers existants

**Nouvelle fonctionnalité (v2.6.0)** : La commande `maravel:install` utilise désormais un système de **fusion intelligente** pour préserver vos personnalisations :

- **Pas de remplacement destructif** : Si les fichiers `User.php`, `UserController.php`, `UserPolicy.php` ou `api.php` existent déjà, ils sont **fusionnés** au lieu d'être remplacés
- **Conservation de vos données** : Toutes vos méthodes, propriétés et routes personnalisées sont préservées
- **Priorité à la librairie** : En cas de conflit (même nom de méthode/propriété), la version de la librairie est utilisée pour garantir la compatibilité
- **Fusion intelligente** :
  - **Use statements** : Fusion sans doublons
  - **Traits** : Conservation et ajout des nouveaux
  - **Propriétés de classe** : Fusion avec priorité aux valeurs de la librairie
  - **Méthodes** : Ajout des nouvelles méthodes, mise à jour des existantes
  - **Routes** : Fusion des use statements si les routes existent déjà
- **Pas de confirmation** : L'installation est automatique et non-destructive

**Exemple** : Si vous avez déjà ajouté des méthodes personnalisées dans `UserController`, elles seront conservées lors de l'exécution de `maravel:install`, et les méthodes de la librairie (comme `updatePassword()`) seront ajoutées ou mises à jour.

Le contrôleur `AuthController` créé inclut les méthodes suivantes :
- `login()` : Authentification des utilisateurs
- `data()` : Récupération des données de l'utilisateur connecté
- `logout()` : Déconnexion de l'utilisateur

Le modèle `User` est automatiquement configuré avec :
- Héritage de `AuthenticatableBase` (au lieu de `Authenticatable`)
- Champ `profile` dans `$fillable`
- Champs `activated` et `password_change_required` dans `$fillable` (v2.5.3+)
- Casts d'énumération pour le profil (`admin` → Administrateur, `other` → Utilisateur)
- Casts booléens pour `activated` et `password_change_required`
- **Système de permissions via $enumCasts (v2.7.0+)** : Les `ability_rules` sont générées automatiquement via $enumCasts
- Labels français automatiques pour `profile`, `activated` et `password_change_required`

**Routes configurées automatiquement** dans `routes/api.php` :
```php
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post("auth/login", "login");

    Route::middleware('auth:sanctum')->group(function () {
        Route::prefix("/auth")->name("auth.")->group(function () {
            Route::get('data', "data")->name("data");
            Route::delete('logout', "logout")->name("logout");
        });

        // Route pour changer le mot de passe (accessible même si password_change_required)
        Route::put('users/update-password', [UserController::class, 'updatePassword'])
            ->name('user.update-password');

        // Routes protégées par le middleware de statut de compte
        Route::middleware('account.status')->group(function () {
            // Routes utilisateurs CRUD
            Route::prefix('users')->name('user.')->controller(UserController::class)->group(function () {
                Route::get('/', 'index')->name('index');
                Route::post('/', 'store')->name('store');
                Route::get('/{id}', 'show')->name('show');
                Route::put('/{id}', 'update')->name('update');
                Route::delete('/{id}', 'destroy')->name('destroy');
            });

            // Routes supplémentaires sous autorisation
        });
    });
});
```

**Endpoints disponibles** :
- `POST /api/auth/login` - Connexion
- `GET /api/auth/data` - Données utilisateur (authentifié)
- `DELETE /api/auth/logout` - Déconnexion (authentifié)
- `PUT /api/users/update-password` - Changer le mot de passe (authentifié, toujours accessible)
- `GET /api/users` - Liste des utilisateurs (authentifié + statut actif)
- `POST /api/users` - Créer un utilisateur (authentifié + statut actif)
- `GET /api/users/{id}` - Voir un utilisateur (authentifié + statut actif)
- `PUT /api/users/{id}` - Modifier un utilisateur (authentifié + statut actif)
- `DELETE /api/users/{id}` - Supprimer un utilisateur (authentifié + statut actif)

**Migrations créées** :

1. `xxxx_xx_xx_xxxxxx_add_profile_to_users_table.php`
```php
Schema::table('users', function (Blueprint $table) {
    $table->enum('profile', ['admin', 'other'])->default('other')->after('email');
});
```

2. `xxxx_xx_xx_xxxxxx_add_account_status_to_users_table.php` (v2.5.3+)
```php
Schema::table('users', function (Blueprint $table) {
    $table->boolean('activated')->default(true)->after('profile');
    $table->boolean('password_change_required')->default(false)->after('activated');
});
```

**Système de permissions (v2.7.0+)** : Le modèle User est configuré avec un système de permissions basé sur les profils via $enumCasts :
- **admin** : Accès complet à toutes les ressources (`['subject' => ['all'], 'action' => ['manage']]`)
- **other** : Permissions limitées (lecture utilisateur uniquement)

Vous pouvez étendre les permissions en modifiant le $enumCasts correspondant dans `app/Models/User.php`. Les `ability_rules` sont maintenant générées automatiquement via le système de casts unifié.

**Gestion du statut des comptes** (v2.5.3+) :

Le middleware `AccountStatusMiddleware` (alias : `account.status`) vérifie automatiquement :
- **activated = false** : Bloque l'accès avec le message "Votre compte est désactivé"
- **password_change_required = true** : Bloque l'accès avec le message "Vous devez changer votre mot de passe" (sauf pour la route `/users/update-password`)

Ce middleware est automatiquement appliqué aux routes CRUD des utilisateurs, mais pas à la route de changement de mot de passe, permettant ainsi aux utilisateurs de changer leur mot de passe même si `password_change_required` est à `true`.

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

#### Gestion des uploads de gros fichiers

L'APIController inclut des méthodes pour gérer l'upload de fichiers volumineux par chunks (morceaux) :

##### uploadChunk()
Permet de télécharger un fichier volumineux en plusieurs morceaux :

```php
// Route : POST /api/upload-chunk
// Paramètres :
// - file: Le morceau de fichier (UploadedFile)
// - index: L'index du morceau (string/int)
// - filename: Le nom du fichier complet

// Exemple d'utilisation côté client (JavaScript) :
const uploadFile = async (file) => {
    const chunkSize = 1024 * 1024; // 1MB par chunk
    const chunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < chunks; i++) {
        const chunk = file.slice(i * chunkSize, (i + 1) * chunkSize);
        const formData = new FormData();
        formData.append('file', chunk);
        formData.append('index', i);
        formData.append('filename', file.name);

        await fetch('/api/upload-chunk', {
            method: 'POST',
            body: formData
        });
    }
};
```

##### mergeChunks()
Fusionne tous les morceaux uploadés en un seul fichier :

```php
// Route : POST /api/merge-chunks
// Paramètres :
// - filename: Le nom du fichier à fusionner

// Retourne :
// {
//   "status": "file merged",
//   "file_path": "uploads/1234567890/mon-fichier.pdf"
// }

// Exemple d'utilisation :
Route::post('/upload-chunk', [MyController::class, 'uploadChunk']);
Route::post('/merge-chunks', [MyController::class, 'mergeChunks']);
```

**Fonctionnalités** :
- Stockage temporaire des chunks dans `storage/app/tmp/`
- Fusion sécurisée avec verrouillage de fichier
- Nettoyage automatique des fichiers temporaires
- Nom de fichier sécurisé (slug + extension)
- Stockage final dans `storage/app/public/uploads/{timestamp}/`

**Sécurité** :
- Validation des chunks
- Tri numérique correct des morceaux
- Gestion des erreurs de lecture/écriture
- Suppression récursive des répertoires temporaires

---

### ModelBase

Utilisez `ModelBase` comme classe parente pour vos modèles afin de bénéficier du formatage automatique.

```php
namespace App\Models;

use Maravel\Models\ModelBase;

class Product extends ModelBase
{
    protected $fillable = ['name', 'price', 'stock', 'description', 'views_count'];

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

    protected array $big_integer_casts = [
        'views_count',               // Converti en int + formaté avec espaces
    ];

    protected array $enumCasts = [
        [
            'colum_name' => 'status',
            'choices' => [
                'active' => 'Actif',
                'inactive' => 'Inactif',
                'pending' => 'En attente',
            ],
            'additional_column_name' => 'status_label',
        ],
    ];
}
```

#### Structure de $enumCasts (v2.6.8+)

Depuis la version 2.6.8, la structure de `$enumCasts` a été améliorée pour offrir plus de flexibilité. Chaque élément est maintenant un tableau associatif avec les clés suivantes :

```php
protected array $enumCasts = [
    [
        'colum_name' => 'status',                    // Nom de la colonne dans la base de données
        'choices' => [                                // Mapping valeur => label
            'active' => 'Actif',
            'inactive' => 'Inactif',
            'pending' => 'En attente',
        ],
        'additional_column_name' => 'status_label',   // Nom de l'attribut formaté dans le JSON
    ],
    [
        'colum_name' => 'priority',
        'choices' => [
            'low' => 'Basse',
            'medium' => 'Moyenne',
            'high' => 'Haute',
        ],
        'additional_column_name' => 'priority_text',
    ],
];
```

**Avantages de cette structure** :
- ✅ Personnalisation du nom de la colonne formatée (au lieu du suffixe `_fr` automatique)
- ✅ Support de plusieurs énumérations dans un même modèle
- ✅ Plus de clarté et de lisibilité dans la configuration

**Exemple de résultat JSON** :
```php
$product = Product::find(1);
// Si $product->status = 'active'

$product->toArray();
// Retourne :
[
    'id' => 1,
    'status' => 'active',              // Valeur brute
    'status_label' => 'Actif',         // Valeur formatée avec le nom personnalisé
    'priority' => 'high',
    'priority_text' => 'Haute',
    // ...
]
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
- `{field}_formatted` : Version formatée des booléens
- `{field}_fr` : Version formatée des dates, montants, floats et big integers
- `{additional_column_name}` : Version formatée des énumérations avec nom personnalisable (défini dans `$enumCasts`)

Exemple avec big_integer_casts :
```php
$product = Product::find(1);
// $product->views_count => 1500000 (int)
// $product->views_count_fr => "1 500 000" (string formatée)
```

Exemple avec booleanCasts (v2.6.9+) :
```php
$product = Product::find(1);
$product->toArray();
// Retourne :
[
    'is_active' => 1,              // Valeur convertie en int (0 ou 1)
    'is_active_formatted' => true, // Valeur booléenne (true ou false)
]
```

**Note** : Depuis la version 2.6.9, les booléens sont automatiquement convertis en entiers (0 ou 1) pour améliorer la compatibilité avec les APIs et bases de données qui attendent des valeurs numériques.

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
    protected $big_integer_casts = ['views_count', 'total_sales'];
    protected $floatCasts = ['rating'];
    protected $enumCasts = [
        [
            'colum_name' => 'status',
            'choices' => ['draft' => 'Brouillon', 'published' => 'Publié'],
            'additional_column_name' => 'status_label'
        ]
    ];
}
```

#### Méthodes disponibles

- `addDateCast($column, $format)` : Ajoute un cast de date dynamiquement
- `addMoneyCast($column)` : Ajoute un cast monétaire dynamiquement
- `addBooleanCast($column)` : Ajoute un cast booléen dynamiquement
- `addEnumCast($column, $choices)` : Ajoute un cast enum dynamiquement
- `addFloatCast($column)` : Ajoute un cast float dynamiquement
- `addBigIntegerCast($column)` : Ajoute un cast big integer dynamiquement (conversion en int + formatage avec espaces)

#### Détails des casts

##### big_integer_casts
Convertit les grands entiers en int et ajoute une version formatée avec séparateurs de milliers :

```php
protected $big_integer_casts = ['views_count', 'total_sales'];

// Résultat dans toArray() :
// 'views_count' => 1500000        // Converti en int
// 'views_count_fr' => '1 500 000' // Version formatée
```

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

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile',
        'activated',
        'password_change_required',
    ];

    protected $hidden = ['password', 'remember_token'];

    // Casts d'énumération pour le profil et les permissions (v2.7.0+)
    protected $enumCasts = [
        [
            'colum_name' => 'profile',
            'additional_column_name' => 'profile_fr',
            'choices' => [
                'admin' => 'Administrateur',
                'other' => 'Utilisateur',
            ],
        ],
        [
            'colum_name' => 'profile',
            'additional_column_name' => 'ability_rules',
            'choices' => [
                'admin' => [
                    [
                        'subject' => ['all'],
                        'action' => ['manage'],
                    ],
                ],
                'other' => [
                    [
                        'subject' => ['user'],
                        'action' => ['read'],
                    ],
                ],
            ],
        ],
        [
            'colum_name' => 'activated',
            'additional_column_name' => 'activated_fr',
            'choices' => [
                1 => 'Oui',
                0 => 'Non',
            ],
        ],
        [
            'colum_name' => 'password_change_required',
            'additional_column_name' => 'password_change_required_fr',
            'choices' => [
                1 => 'Oui',
                0 => 'Non',
            ],
        ],
    ];

    /**
     * Get the attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'activated' => 'boolean',
            'password_change_required' => 'boolean',
        ];
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

### Gestion des utilisateurs et sécurité des comptes

Maravel inclut un système complet de gestion des utilisateurs avec contrôle du statut des comptes (v2.5.3+).

#### UserController

Le contrôleur `UserController` est automatiquement créé lors de l'installation et inclut :

- **Opérations CRUD complètes** : Liste, création, modification, suppression des utilisateurs
- **Méthode updatePassword()** : Permet aux utilisateurs de changer leur mot de passe
- **Validation automatique** : Règles de validation pour création et modification
- **Hachage des mots de passe** : Les mots de passe sont automatiquement hachés
- **Gestion du statut** : Support des champs `activated` et `password_change_required`

**Méthode updatePassword** :
```php
// Route : PUT /api/users/update-password
// Corps de la requête :
{
    "current_password": "ancien_mot_de_passe",
    "new_password": "nouveau_mot_de_passe",
    "new_password_confirmation": "nouveau_mot_de_passe"
}

// Réponse en cas de succès :
{
    "message": "Mot de passe modifié avec succès",
    "user": { ... }
}
```

Cette méthode :
- Vérifie que le mot de passe actuel est correct
- Valide le nouveau mot de passe (minimum 8 caractères)
- Vérifie que la confirmation correspond
- Met automatiquement `password_change_required` à `false` après changement

#### AccountStatusMiddleware

Le middleware `AccountStatusMiddleware` (alias : `account.status`) vérifie le statut du compte utilisateur avant d'autoriser l'accès aux routes protégées.

**Vérifications effectuées** :

1. **Compte désactivé** (`activated = false`) :
   ```json
   {
       "error": "Votre compte est désactivé. Veuillez contacter l'administrateur."
   }
   ```
   Code HTTP : 403

2. **Changement de mot de passe requis** (`password_change_required = true`) :
   ```json
   {
       "error": "Vous devez changer votre mot de passe avant de continuer."
   }
   ```
   Code HTTP : 403

**Important** : Le middleware n'est PAS appliqué à la route `/users/update-password`, permettant aux utilisateurs de changer leur mot de passe même si `password_change_required = true`.

#### Utilisation du middleware

Le middleware est automatiquement configuré dans `bootstrap/app.php` :

```php
->withMiddleware(function (Middleware $middleware) {
    // Middleware Maravel pour vérifier le statut du compte
    $middleware->alias([
        'account.status' => \Maravel\Http\Middleware\AccountStatusMiddleware::class,
    ]);
})
```

Appliquez-le sur vos routes :

```php
// Sur un groupe de routes
Route::middleware(['auth:sanctum', 'account.status'])->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::apiResource('products', ProductController::class);
});

// Sur une route spécifique
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth:sanctum', 'account.status']);
```

#### Scénarios d'utilisation

**1. Désactiver un utilisateur** :
```php
$user = User::find(5);
$user->activated = false;
$user->save();
// L'utilisateur ne pourra plus accéder aux routes protégées par account.status
```

**2. Forcer le changement de mot de passe** :
```php
$user = User::find(5);
$user->password_change_required = true;
$user->save();
// L'utilisateur devra changer son mot de passe avant d'accéder aux routes protégées
```

**3. Réactiver un compte** :
```php
$user = User::find(5);
$user->activated = true;
$user->password_change_required = false;
$user->save();
// L'utilisateur retrouve un accès complet
```

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
        // 422 = Unprocessable Entity (erreur de validation)
        return $this->responseError(['field' => ['Error message']], 422);
    }
}
```

> **⚠️ v3.0.0 — Conformité REST (BREAKING CHANGE).** Depuis la v3.0.0, `responseOk()`, `responseOkPaginate()` et `responseError()` renvoient le **vrai code de statut HTTP** passé en argument (`$status`) au lieu de toujours répondre `200 OK`. Le champ `"status"` reste présent dans le corps JSON pour compatibilité ascendante côté client. Voir la section [Codes de statut HTTP (REST)](#codes-de-statut-http-rest).

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

##### Reducers personnalisés

Le trait fournit également `reduceCollection()` qui permet d'appliquer des transformations personnalisées sur une collection après une requête SQL :

```php
// Dans votre modèle, définissez des méthodes "reducer"
class Product extends ModelBase
{
    /**
     * Reducer pour ajouter des statistiques
     */
    public function statsReducer($collection, $requestData)
    {
        // Ajouter des statistiques calculées
        $collection->map(function ($item) {
            $item->total_revenue = $item->price * $item->sold_count;
            return $item;
        });

        return $collection;
    }

    /**
     * Reducer pour filtrer selon l'utilisateur
     */
    public function userFilterReducer($collection, $requestData)
    {
        $userId = $requestData['user_id'] ?? null;
        if ($userId) {
            return $collection->where('user_id', $userId)->values();
        }
        return $collection;
    }
}

// Utilisation dans la requête API :
// GET /api/products?reduce_stats=true
// GET /api/products?reduce_user_filter=true&user_id=5

// Le système cherchera automatiquement les méthodes suffixées par "Reducer"
```

Les reducers sont automatiquement appliqués par l'APIController après l'exécution de la requête SQL, permettant des transformations complexes sans surcharger la requête.

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
- ✅ Création du contrôleur UserController avec méthode `updatePassword()` (v2.5.3+)
- ✅ Création de la policy UserPolicy pour les permissions utilisateurs (v2.5.3+)
- ✅ Configuration automatique des routes d'authentification et utilisateurs dans `routes/api.php`
- ✅ Création de la migration pour ajouter la colonne `profile` (enum: admin, other)
- ✅ Création de la migration pour `activated` et `password_change_required` (v2.5.3+)
- ✅ Configuration du modèle User avec AuthenticatableBase et système de permissions
- ✅ Intégration du middleware `AccountStatusMiddleware` dans `bootstrap/app.php` (v2.5.3+)
- ✅ Publication du fichier de configuration `config/advanced-api-controller.php`
- ✅ **Fusion intelligente** des fichiers existants (v2.6.0+) : Vos personnalisations sont préservées

**Avantages** :
- Configuration rapide et sans erreur
- AuthController prêt à l'emploi avec login, logout et récupération des données utilisateur
- Routes d'authentification configurées automatiquement (plus besoin de les ajouter manuellement)
- Support complet de Laravel Sanctum pour l'authentification API
- Structure de routes organisée avec groupes et préfixes
- Système de permissions prêt à l'emploi avec profils utilisateur (admin, user)
- Modèle User configuré avec AuthenticatableBase et ability_rules
- **Fusion non-destructive** : Vos méthodes et propriétés personnalisées sont conservées
- **Installation répétable** : Vous pouvez relancer la commande pour mettre à jour sans perte de données

**Recommandation** : Lancez cette commande immédiatement après `composer require mawena/maravel` pour configurer votre projet en une seule commande. Vous pouvez aussi la relancer après une mise à jour de la librairie pour bénéficier des nouvelles fonctionnalités sans perdre vos personnalisations.

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

### Filtres de présence de relation

Filtrer par présence ou absence d'une relation :

```
GET /api/products?have_reviews=true        // Produits qui ont au moins un avis
GET /api/products?doesnt_have_reviews=true // Produits sans aucun avis
```

Relations imbriquées (utiliser `>` comme séparateur) :

```
GET /api/products?have_category>images=true // Produits dont la catégorie a des images
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

### Reducers personnalisés

Appliquer des transformations personnalisées après la requête :

```
GET /api/products?reduce_stats=true
GET /api/products?reduce_user_filter=true&user_id=5
```

Les reducers sont définis dans le modèle (voir section ControllerHelperTrait).

### Combinaison de filtres

Combiner plusieurs filtres :

```
GET /api/products?search=phone&min<price=100&max<price=1000&in_status=active-featured&have_reviews=true&with_category=true&order_by_desc=created_at&per_page=20&reduce_stats=true
```

---

## Filtrage dynamique des champs (Headers)

Depuis la version **2.8.0**, Maravel permet de contrôler les champs retournés dans chaque réponse JSON directement depuis les headers HTTP, sans modifier le moindre contrôleur. C'est une approche "opt-out" : par défaut, tous les champs sont retournés.

### Activation du middleware

Le middleware est enregistré automatiquement sous l'alias `maravel.fields`. Appliquez-le sur les routes ou groupes de routes souhaités :

```php
// Sur un groupe de routes
Route::middleware(['auth:sanctum', 'maravel.fields'])->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::apiResource('users', UserController::class);
});

// Sur une route spécifique
Route::get('/users/{id}', [UserController::class, 'show'])
    ->middleware('maravel.fields');
```

### Headers disponibles

| Header | Rôle |
|--------|------|
| `X-Maravel-Only` | Ne retourner **que** les champs listés (séparés par des virgules) |
| `X-Maravel-Except` | Retourner **tout sauf** les champs listés (séparés par des virgules) |

### Comportement par défaut

Sans header, la réponse est identique à ce qu'elle était avant. Le middleware est **no-op** si aucun des deux headers n'est présent.

### Exemples

#### `X-Maravel-Only` — Inclusion

Ne retourner que `id`, `name` et `email` :

```http
GET /api/users
X-Maravel-Only: id,name,email
```

Réponse (au lieu de tous les champs) :
```json
{
    "status": 200,
    "data": [
        { "id": 1, "name": "Alice", "email": "alice@example.com" },
        { "id": 2, "name": "Bob",   "email": "bob@example.com" }
    ],
    "total": 2
}
```

#### `X-Maravel-Except` — Exclusion

Retourner tous les champs sauf `password` et `remember_token` :

```http
GET /api/users/1
X-Maravel-Except: password,remember_token
```

Réponse :
```json
{
    "status": 200,
    "data": {
        "user": {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com",
            "profile": "admin",
            "activated": 1
        }
    },
    "messages": []
}
```

#### Cumul des deux headers

Si les deux headers sont présents, `X-Maravel-Only` est appliqué en premier, puis `X-Maravel-Except` retire des champs de la sélection restreinte :

```http
GET /api/users/1
X-Maravel-Only: id,name,email,profile
X-Maravel-Except: profile
```

Résultat : seulement `id`, `name`, `email` (on a gardé 4 champs, puis retiré `profile`).

### Structures imbriquées

Le filtrage s'applique intelligemment sur toutes les structures de réponse Maravel :

- **Liste (index)** : chaque objet de la liste est filtré
- **Objet unique (show/store/update)** : les attributs du modèle sont filtrés
- **Relations chargées** : si un champ de relation (ex: `category`) n'est pas dans `X-Maravel-Only`, il est retiré ; s'il y est, il est conservé tel quel

```http
GET /api/products?with_category=true
X-Maravel-Only: id,name,price,category
```

→ Retourne `id`, `name`, `price` et l'objet `category` complet.

---

## Codes de statut HTTP (REST)

Depuis la version **3.0.0**, Maravel respecte les conventions REST : chaque réponse renvoie le **vrai code de statut HTTP** correspondant à la sémantique de l'opération (RFC 7231 / 4918), au lieu de toujours répondre `200 OK` avec le code réel enfoui dans le corps JSON.

> **⚠️ BREAKING CHANGE (v3.0.0).** Avant la v3.0.0, toutes les réponses (succès comme erreurs) renvoyaient `HTTP 200`, le code applicatif étant uniquement disponible dans le champ `"status"` du corps. Désormais le code HTTP réel est utilisé. Le champ `"status"` reste présent dans le corps pour compatibilité ascendante.

### Codes utilisés par l'APIController

| Opération | Cas | Code HTTP |
|-----------|-----|-----------|
| `index` / `show` | Succès | `200 OK` |
| `store` / `store_multiple` | Création réussie | `201 Created` |
| `update` | Mise à jour réussie | `200 OK` |
| `destroy` | Suppression réussie | `200 OK` |
| Toutes | Échec de validation (Laravel ou validations manuelles) | `422 Unprocessable Entity` |
| `update` | ID manquant | `422 Unprocessable Entity` |
| `show` / `update` / `destroy` | Ressource introuvable | `404 Not Found` |
| Toutes | Autorisation refusée (Gate/Policy) | `403 Forbidden` |
| Toutes | Erreur serveur | `500 Internal Server Error` |

### Format des réponses

**Succès** (le code HTTP correspond au champ `status`) :

```json
{
    "status": 201,
    "data": { "user": { "id": 1, "name": "John" } },
    "messages": []
}
```

**Erreur** (ex : validation, HTTP `422`) :

```json
{
    "status": 422,
    "errors": { "email": "Le champ email est obligatoire" }
}
```

### Impact côté client (migration v2 → v3)

- Les clients qui testaient le champ `response.data.status` continuent de fonctionner sans modification.
- Les clients qui supposaient un `HTTP 200` systématique doivent désormais gérer les branches d'erreur HTTP. Par exemple avec Axios, les réponses `4xx`/`5xx` déclenchent le bloc `.catch()` (ou `try/catch` avec `await`) :

```js
try {
    const { data } = await axios.post('/api/users', payload);
    // 2xx : data.data contient la ressource créée
} catch (error) {
    // 4xx / 5xx : error.response.data.errors contient le détail
    const errors = error.response.data.errors;
}
```

### Personnalisation

Les helpers du `CustomResponseTrait` acceptent le code HTTP en argument :

```php
$this->responseOk($data, $messages, 201);          // 201 Created
$this->responseError(['email' => ['...']], 422);   // 422 Unprocessable Entity
```

Dans une validation manuelle (`storeManualValidationsFunction` / `updateManualValidationsFunction`), le code peut être fourni via la clé `status` (défaut : `422`) :

```php
return [
    'errors' => ['quota' => ['Quota dépassé']],
    'status' => 409, // 409 Conflict
];
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
        [
            'colum_name' => 'status',
            'choices' => [
                'draft' => 'Brouillon',
                'published' => 'Publié',
                'archived' => 'Archivé',
            ],
            'additional_column_name' => 'status_label',
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
