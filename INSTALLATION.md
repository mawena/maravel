# Guide d'installation - Laravel API Controller Library

## Prérequis

- PHP 8.1 ou supérieur
- Laravel 10.0 ou supérieur
- Composer

## Installation

### 1. Installation via Composer

```bash
composer require mawena/maravel
```

### 2. Publication de la configuration (optionnel)

```bash
php artisan vendor:publish --provider="LaravelApiController\\Providers\\ApiControllerServiceProvider" --tag="api-controller-config"
```

### 3. Configuration des autorisations (optionnel)

Si vous utilisez les autorisations Laravel, assurez-vous que vos modèles implémentent les bonnes interfaces :

```php
// Dans votre modèle User
use Illuminate\Contracts\Auth\Access\Authorizable;

class User extends Authenticatable implements Authorizable
{
    // ...
}
```

## Configuration avancée

### 1. Personnalisation du namespace

Si vous souhaitez utiliser un namespace différent pour vos modèles, vous pouvez modifier le trait `ControllerHelperTrait` :

```php
// Dans votre contrôleur
protected function getModelPath($modelName)
{
    return "\\App\\Models\\$modelName"; // Changez selon vos besoins
}
```

### 2. Configuration des réponses

Vous pouvez personnaliser le format des réponses en étendant les traits :

```php
use LaravelApiController\Http\Traits\CustomResponseTrait;

class CustomController extends APIController
{
    // Surchargez les méthodes de réponse si nécessaire
    public function responseOk($data = [], $messages = [], $status = 200)
    {
        // Votre logique personnalisée
        return parent::responseOk($data, $messages, $status);
    }
}
```

### 3. Configuration des filtres

Vous pouvez désactiver certains filtres en modifiant la configuration :

```php
// config/api-controller.php
'filters' => [
    'enabled' => [
        'basic' => true,
        'min_max' => false, // Désactiver les filtres min/max
        'in_not_in' => true,
        'relations' => true,
        'search' => true,
        'json' => false, // Désactiver les filtres JSON
    ],
],
```

## Migration depuis votre code existant

### 1. Mise à jour des contrôleurs

Remplacez vos contrôleurs existants :

```php
// Avant
class UserController extends Controller
{
    // Votre code existant
}

// Après
use LaravelApiController\Http\Controllers\APIController;

class UserController extends APIController
{
    protected string $modelClass = User::class;
    // Configuration spécifique
}
```

### 2. Mise à jour des routes

Vos routes existantes continueront de fonctionner, mais vous pouvez les simplifier :

```php
// Avant
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
// ...

// Après
Route::apiResource('users', UserController::class);
```

### 3. Migration des traits

Si vous utilisez déjà des traits similaires, vous pouvez les remplacer progressivement :

```php
// Avant
use App\Http\Traits\CustomResponseTrait;
use App\Http\Traits\ControllerHelperTrait;

// Après
use LaravelApiController\Http\Traits\CustomResponseTrait;
use LaravelApiController\Http\Traits\ControllerHelperTrait;
```

## Dépannage

### Problèmes courants

1. **Erreur "Class not found"**
   - Vérifiez que l'autoloader Composer est à jour : `composer dump-autoload`

2. **Erreur de namespace**
   - Vérifiez que le namespace dans votre contrôleur correspond à celui de la librairie

3. **Problèmes d'autorisation**
   - Assurez-vous que vos modèles implémentent les bonnes interfaces
   - Vérifiez que vos policies sont correctement définies

4. **Erreurs de validation**
   - Vérifiez que vos règles de validation sont correctement définies
   - Assurez-vous que les messages d'erreur sont bien formatés

### Support

Pour toute question ou problème :

1. Vérifiez la documentation dans le README.md
2. Consultez les exemples dans le dossier `examples/`
3. Ouvrez une issue sur le repository GitHub

## Mise à jour

Pour mettre à jour la librairie :

```bash
composer update mawena/maravel
```

Vérifiez le fichier CHANGELOG.md pour les changements entre les versions.
