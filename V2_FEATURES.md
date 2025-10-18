# Laravel Advanced API Controller Library v2 - Nouvelles Fonctionnalités

## 🚀 Vue d'ensemble

La version 2 de la librairie apporte des améliorations majeures avec un système de permissions avancé, des modèles enrichis et des outils de développement puissants.

## ✨ Nouvelles Fonctionnalités

### 1. Système de Permissions Avancé

#### BasePolicy
- **Vérifications automatiques** basées sur les profils utilisateur
- **Support des règles d'abilités** avec sujets et actions
- **Méthodes personnalisables** pour chaque type d'opération
- **Intégration complète** avec le système d'autorisation Laravel

#### PermissionCheckerTrait
- **Méthodes de vérification** : `canRead()`, `canCreate()`, `canUpdate()`, `canDelete()`
- **Vérifications avancées** : `canManage()`, `isAdmin()`, `hasProfile()`
- **Support des permissions personnalisées** avec `check()`
- **Gestion des profils** et règles d'abilités

### 2. Modèles Enrichis avec ModelBase

#### Casts Personnalisés Automatiques
```php
// Casts monétaires
protected $money_casts = ['balance' => 'balance_formatted'];

// Casts booléens
protected $boolean_casts = ['is_active' => 'is_active_bool'];

// Casts de dates
protected $date_casts = [
    'last_login' => ['new_name' => 'last_login_fr', 'format' => 'd/m/Y H:i']
];

// Casts d'énumérations
protected $enum_casts = [
    [
        'column_name' => 'profile',
        'choices' => ['admin' => 'Administrateur', 'client' => 'Client'],
        'additional_column_name' => 'profile_fr'
    ]
];
```

#### Formatage Automatique
- **Dates françaises** : `created_at_fr`, `updated_at_fr`
- **Montants formatés** : `balance_fr` avec séparateurs français
- **Booléens** : conversion automatique en booléens
- **Énumérations** : traduction automatique des valeurs

### 3. Outils de Développement

#### Commande Personnalisée
```bash
php artisan make:advanced-policy UserPolicy
```
- **Génération automatique** des policies avec BasePolicy
- **Stubs personnalisés** avec exemples de vérifications
- **Configuration automatique** du nom du modèle

#### Configuration Avancée
```php
// config/advanced-api-controller.php
'permissions' => [
    'enabled' => true,
    'use_advanced_policies' => true,
    'admin_profile' => 'admin',
],
'models' => [
    'use_model_base' => true,
    'default_date_format' => 'd/m/Y H:i:s',
],
```

## 🎯 Exemples d'Utilisation

### Contrôleur Avancé
```php
class UserController extends APIController
{
    protected string $modelClass = User::class;
    
    // Système de permissions automatique
    protected string|null $indexAbilityName = "viewAny";
    protected string|null $storeAuthName = "create";
    
    // Filtrage avec permissions
    protected $indexManualFilter = function($query, $user, $requestData) {
        if (!$this->isAdmin($user)) {
            $query->where('id', $user->id);
        }
        return $query;
    };
}
```

### Modèle Enrichi
```php
class User extends ModelBase
{
    // Casts automatiques
    protected $money_casts = ['balance' => 'balance_formatted'];
    protected $boolean_casts = ['is_active' => 'is_active_bool'];
    
    // Règles d'abilités
    public function getAbilityRulesAttribute()
    {
        return [
            'admin' => [['subject' => ['all'], 'action' => ['manage']]],
            'user' => [['subject' => ['user'], 'action' => ['read', 'update']]]
        ][$this->profile];
    }
}
```

### Policy Avancée
```php
class UserPolicy extends BasePolicy
{
    protected $modelName = "user";
    
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

## 🔧 Migration depuis la v1

### 1. Mise à jour du namespace
```php
// Avant
use LaravelApiController\Http\Controllers\APIController;

// Après
use LaravelAdvancedApiController\Http\Controllers\APIController;
```

### 2. Mise à jour du composer.json
```json
{
    "require": {
        "mawena/maravel": "^2.0"
    }
}
```

### 3. Mise à jour de la configuration
```bash
php artisan vendor:publish --provider="LaravelAdvancedApiController\\Providers\\AdvancedApiControllerServiceProvider" --tag="advanced-api-controller-config"
```

## 📊 Comparaison v1 vs v2

| Fonctionnalité | v1 | v2 |
|---|---|---|
| APIController de base | ✅ | ✅ |
| Traits personnalisés | ✅ | ✅ |
| Filtres automatiques | ✅ | ✅ |
| Pagination | ✅ | ✅ |
| **Système de permissions** | ❌ | ✅ |
| **ModelBase enrichi** | ❌ | ✅ |
| **Policies automatiques** | ❌ | ✅ |
| **Commande personnalisée** | ❌ | ✅ |
| **Casts personnalisés** | ❌ | ✅ |
| **Formatage automatique** | ❌ | ✅ |
| **Configuration avancée** | ❌ | ✅ |

## 🎉 Avantages de la v2

1. **Sécurité renforcée** avec système de permissions avancé
2. **Développement plus rapide** avec outils automatiques
3. **Code plus propre** avec formatage automatique
4. **Maintenance simplifiée** avec configuration centralisée
5. **Extensibilité** avec hooks personnalisés
6. **Documentation complète** avec exemples avancés

## 🚀 Prochaines Étapes

1. **Installer la v2** dans votre projet
2. **Migrer vos contrôleurs** vers le nouveau namespace
3. **Créer des policies** avec la commande personnalisée
4. **Enrichir vos modèles** avec ModelBase
5. **Configurer les permissions** selon vos besoins
6. **Profiter des nouvelles fonctionnalités** ! 🎊
