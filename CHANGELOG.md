# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-01-XX

### Ajouté
- **Système de permissions avancé** avec BasePolicy et PermissionCheckerTrait
- **ModelBase** avec casts personnalisés automatiques
- **Commande personnalisée** `make:advanced-policy` pour générer les policies
- **Support des profils utilisateur** et règles d'abilités
- **Formatage automatique** des dates, montants, booléens, énumérations
- **Vérifications de permissions** personnalisées par modèle
- **Configuration avancée** via fichier de config
- **Stubs personnalisés** pour les policies
- **Support des statistiques** automatiques dans les modèles
- **Méthodes utilitaires** pour la gestion des permissions
- **Intégration complète** avec le système d'autorisation Laravel

### Amélioré
- **APIController** avec support des permissions avancées
- **Traits** avec nouvelles fonctionnalités de vérification
- **Documentation** complète avec exemples avancés
- **Configuration** plus flexible et personnalisable
- **Exemples** plus complets et réalistes

### Changé
- **Namespace** changé vers `LaravelAdvancedApiController`
- **Nom du package** : `maravel`
- **Service Provider** : `AdvancedApiControllerServiceProvider`
- **Configuration** : `advanced-api-controller.php`

## [1.0.0] - 2024-01-XX

### Ajouté
- APIController de base avec toutes les méthodes CRUD
- Trait CustomResponseTrait pour le formatage des réponses JSON
- Trait ControllerHelperTrait avec des méthodes utilitaires
- Trait ScriptGeneratorTrait pour la génération de code
- Support des filtres automatiques (basiques, min/max, IN/NOT IN, relations, recherche)
- Support de la pagination automatique
- Support des validations personnalisées
- Support des hooks (before/after create/update/delete)
- Support des autorisations Laravel (Gates)
- Configuration optionnelle via fichier de config
- Service Provider pour l'intégration Laravel
- Documentation complète avec exemples
- Exemples de contrôleurs, modèles et routes

### Fonctionnalités
- Méthodes CRUD automatiques (index, show, store, update, destroy)
- Création multiple d'éléments
- Filtrage avancé avec plusieurs types de filtres
- Recherche textuelle sur plusieurs champs
- Tri automatique
- Pagination configurable
- Relations Eloquent automatiques
- Validation Laravel intégrée
- Gestion d'erreurs standardisée
- Réponses JSON formatées
- Support des fichiers base64
- Notifications Firebase (optionnel)

### Sécurité
- Intégration avec les Gates Laravel
- Validation des données d'entrée
- Protection CSRF (via middleware Laravel)
- Échappement automatique des données

### Performance
- Requêtes optimisées avec relations
- Pagination pour éviter les surcharges
- Filtrage au niveau de la base de données
- Cache des validations (via Laravel)

## [0.1.0] - 2024-01-XX

### Ajouté
- Version initiale de la librairie
- Structure de base des fichiers
- Configuration Composer
- Tests unitaires de base
