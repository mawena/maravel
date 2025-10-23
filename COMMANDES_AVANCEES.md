# Commandes Avancées - Laravel Advanced API Controller

Cette bibliothèque fournit des commandes Artisan personnalisées pour générer des contrôleurs et des policies avec des fonctionnalités avancées.

## Commandes Disponibles

### 1. Commandes Standard Laravel (Recommandées)

#### `make:controller`
Remplace la commande standard `make:controller` de Laravel avec des fonctionnalités avancées.

```bash
php artisan make:controller UserController
```

**Fonctionnalités incluses :**
- Système de gestion REST complet (CRUD)
- Gestion automatique des relations
- Système de validation avancé
- Support de la pagination et des filtres
- Documentation API automatique
- Méthodes de callback personnalisables

#### `make:policy`
Remplace la commande standard `make:policy` de Laravel avec des fonctionnalités avancées.

```bash
php artisan make:policy UserPolicy
```

**Fonctionnalités incluses :**
- Système de permissions avancé
- Vérification des profils utilisateur
- Support des règles d'abilités
- Méthodes de vérification personnalisées
- Support des méthodes CRUD complètes

### 2. Commandes Avancées (Alternatives)

#### `make:advanced-controller`
Génère un contrôleur avec toutes les fonctionnalités avancées.

```bash
php artisan make:advanced-controller ProductController
```

#### `make:advanced-policy`
Génère une policy avec toutes les fonctionnalités avancées.

```bash
php artisan make:advanced-policy ProductPolicy
```

## Utilisation

### Création d'un Contrôleur

```bash
# Utilisation standard (recommandée)
php artisan make:controller ProductController

# Utilisation avancée
php artisan make:advanced-controller ProductController
```

Le contrôleur généré inclut :
- Méthodes CRUD complètes (index, show, store, update, destroy)
- Gestion des relations
- Système de validation
- Callbacks personnalisables
- Documentation API

### Création d'une Policy

```bash
# Utilisation standard (recommandée)
php artisan make:policy ProductPolicy

# Utilisation avancée
php artisan make:advanced-policy ProductPolicy
```

La policy générée inclut :
- Méthodes de permissions CRUD
- Vérifications personnalisables
- Support des profils utilisateur
- Système d'abilités avancé

## Configuration Post-Création

### Pour les Contrôleurs

1. **Ajouter les routes** dans `routes/api.php` :
```php
Route::apiResource('products', ProductController::class);
```

2. **Configurer les relations** dans le modèle
3. **Définir les règles de validation**
4. **Tester les endpoints**

### Pour les Policies

1. **Enregistrer la policy** dans `AuthServiceProvider` :
```php
protected $policies = [
    Product::class => ProductPolicy::class,
];
```

2. **Configurer les permissions** dans le modèle User
3. **Tester les permissions**
4. **Personnaliser les méthodes** selon vos besoins métier

## Avantages

- **Productivité** : Génération rapide de code fonctionnel
- **Cohérence** : Structure standardisée pour tous les projets
- **Maintenabilité** : Code bien documenté et organisé
- **Flexibilité** : Personnalisation facile selon les besoins
- **Intégration** : Compatible avec l'écosystème Laravel

## Support

Pour toute question ou problème, consultez la documentation de la bibliothèque ou créez une issue sur le repository.
