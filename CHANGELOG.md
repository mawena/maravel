# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.7] - 2024-11-17
### Modifié
- **La fonction deletePublicUploadedFile de APIController a été changé de private vers protected** 

## [2.4.6] - 2024-11-17

### Réparé
- **Réparatiaon du bug d'importation de Storage dans APIController** 

## [2.4.5] - 2024-11-17

### Réparé
- **Réparatiaon du bug d'importation de Str dans APIController** 


## [2.4.4] - 2024-11-17

### Ajouté
- **Fonctions pour gérer l'upload des gros fichiers dans l'APIController** 
  - uploadChunk()
  - mergeChunks()
  - deletePublicUploadedFile()

## [2.4.3] - 2024-11-13

### Ajouté
- **Commande d'installation automatique** `maravel:install`
  - Installation automatique de Laravel Sanctum et configuration API
  - Création automatique du contrôleur AuthController dans `app/Http/Controllers/API/`
  - Configuration automatique des routes d'authentification dans `routes/api.php`
  - Création automatique de la migration pour ajouter la colonne `profile` (enum: admin, other)
  - Configuration automatique du modèle User avec AuthenticatableBase
  - Publication automatique du fichier de configuration
- **Stub AuthController** avec méthodes login, logout et data
- **Stub de migration** pour ajouter le profil utilisateur à la table users
- **Stub du modèle User** configuré avec :
  - Héritage de AuthenticatableBase
  - Champ profile dans $fillable
  - Casts d'énumération pour le profil (admin, other)
  - Méthode getAbilityRulesAttribute() pour le système de permissions
  - Attribut ability_rules dans $appends
- **Stub des routes API** avec structure organisée (controller groups, prefixes, middleware)
- **Routes d'authentification** prêtes à l'emploi :
  - POST /api/auth/login - Connexion utilisateur
  - GET /api/auth/data - Récupération des données utilisateur (authentifié)
  - DELETE /api/auth/logout - Déconnexion utilisateur (authentifié)
- **Système de permissions** basé sur les profils :
  - Profil admin avec accès complet (subject: all, action: manage)
  - Profil other sans permissions par défaut (personnalisable)
- **Confirmations interactives** pour éviter d'écraser les fichiers existants

### Amélioré
- **Documentation README.md** avec section complète sur l'installation automatique
- **Expérience développeur** - Configuration complète en une seule commande
- **Intégration Laravel Sanctum** - Setup automatique pour l'authentification API
- **Sécurité** - Détection et confirmation avant remplacement de fichiers existants

### Changé
- Les utilisateurs n'ont plus besoin de configurer manuellement les routes d'authentification
- Le modèle User est automatiquement configuré avec le système de permissions
- L'installation complète se fait désormais avec `php artisan maravel:install`

## [2.0.0] - 2024-01-XX

### Ajouté
- **Système de permissions avancé** avec BasePolicy et PermissionCheckerTrait
- **ModelTrait** - Trait partagé pour le formatage des données (évite la duplication de code)
- **ModelBase** avec casts personnalisés automatiques (utilise ModelTrait)
- **AuthenticatableBase** pour les modèles d'authentification (utilise ModelTrait)
- **Commandes personnalisées** :
  - `make:maravel.controller` - Génère un contrôleur API complet
  - `make:maravel.model` - Génère un modèle avec ModelBase/AuthenticatableBase
  - `make:maravel.policy` - Génère une policy avancée
- **Support des profils utilisateur** et règles d'abilités
- **Options avancées** pour make:maravel.model (-m, -c, -p, -a, --all)
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
- **Namespace** changé vers `Maravel`
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
