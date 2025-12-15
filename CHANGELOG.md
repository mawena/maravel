# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.6.9] - 2025-12-13
### Modifié
- **Formatage des booléens dans ModelTrait** : Ajout de la conversion en entier de la valeur brute
  - La valeur booléenne est maintenant convertie en int (0 ou 1) dans le résultat JSON
  - La version formatée `{field}_formatted` contient toujours le booléen (true/false)
  - Améliore la compatibilité avec les bases de données et les APIs qui attendent des valeurs numériques

## [2.6.8] - 2025-12-13
### Modifié
- **Structure de $enumCasts dans ModelTrait** : Modification de la structure pour permettre plus de flexibilité
  - Ancienne structure : `'column' => ['value' => 'Label']`
  - Nouvelle structure : `['colum_name' => 'column', 'choices' => [...], 'additional_column_name' => 'custom_name']`
  - Permet de personnaliser le nom de la colonne formatée au lieu d'utiliser automatiquement le suffixe `_fr`
  - **Note** : Typo dans le code : `"colum_name"` devrait être corrigé en `"column_name"` dans une future version

## [2.6.7] - 2025-12-13
### Corrigé
- **Conversion du paginator en tableau dans responseIndexOk()** : Ajout de la conversion explicite du LengthAwarePaginator en tableau
  - Ajout de `$data = $data->toArray();` après la création du LengthAwarePaginator
  - Assure la cohérence du format des données entre le mode paginé et non paginé
  - Évite les problèmes de sérialisation JSON avec l'objet paginator

## [2.6.6] - 2025-12-13
### Corrigé
- **Condition redondante dans uploadChunk()** : Simplification de la vérification de création du dossier temporaire
  - Suppression de la double vérification `!is_dir($tmpPath)` qui était illogique
  - La condition `if (!is_dir($tmpPath) && !mkdir($tmpPath, 0775, true) && !is_dir($tmpPath))` a été simplifiée en `if (!is_dir($tmpPath) && !mkdir($tmpPath, 0775, true))`
  - Amélioration de la lisibilité et de la logique du code

## [2.6.5] - 2025-12-09
### Corrigé
- **Sécurité et fiabilité de la méthode uploadChunk()** : Correction des vulnérabilités et amélioration de la robustesse
  - Validation stricte de l'index pour éviter les injections de chemin malveillants
  - Vérification du succès de l'opération `move()` avant de retourner un succès
  - Vérification de l'existence du fichier après l'upload
  - Ajout d'une limite de taille de chunk (10MB par défaut) pour éviter les attaques par déni de service
  - Gestion des exceptions lors de l'upload

## [2.6.4] - 2025-12-09
### Amélioré
- **Middleware account.status dans api.php** : Confirmation et documentation de l'intégration du middleware `account.status` dans le stub des routes API
  - Le middleware est appliqué aux routes CRUD des utilisateurs
  - Protection contre l'accès aux comptes désactivés (`activated = false`)
  - Obligation de changement de mot de passe (`password_change_required = true`)
  - La route `/users/update-password` reste accessible même si le changement de mot de passe est requis

## [2.6.3] - 2025-12-09
### Corrigé
- **Duplication de propriétés et méthodes lors de la fusion** : Réécriture complète des méthodes `extractClassProperties` et `extractMethods` dans FileMerger pour éviter les doublons
  - Les propriétés et méthodes ne sont plus extraites plusieurs fois
  - Les docblocks sont correctement associés à leurs éléments respectifs
  - Utilisation d'un parsing ligne par ligne avec comptage des accolades au lieu de regex complexes
  - Les propriétés du stub écrasent maintenant correctement celles du fichier existant (priorité à la librairie)

### Amélioré
- **Extraction de code plus robuste** : Meilleure gestion des propriétés et méthodes multi-lignes avec tableaux complexes
- **Fusion intelligente** : Les propriétés identiques ne sont plus dupliquées dans le fichier résultant

## [2.6.2] - 2024-12-9
### Corrigé
- **Supression du dossier de test**

## [2.6.1] - 2024-12-8
### Corrigé
- **Bug de doubles déclarations dans FileMerger** : La méthode `extractTraits` capturait incorrectement les use statements au lieu des use traits dans la classe
- **Formatage excessif** : Réduction des espaces superflus dans les fichiers générés par FileMerger
- **Méthode manquante dans UserPolicy** : Ajout de la méthode `updatePassword` pour autoriser le changement de mot de passe
- **Autorisation manquante** : Ajout de la vérification d'autorisation dans `UserController::updatePassword`

### Amélioré
- **Extraction des traits** : Amélioration de la regex pour ne capturer que les use traits dans le corps de la classe
- **Génération de code** : Meilleur contrôle de l'espacement dans les fichiers générés

## [2.6.0] - 2024-12-8
### Ajouté
- **Fusion intelligente des fichiers existants lors de l'installation**
  - Nouvelle classe `FileMerger` pour gérer la fusion de code PHP
  - Fusion automatique pour `User.php`, `UserController.php`, `UserPolicy.php` et `api.php`
  - Conservation des personnalisations existantes lors de l'exécution de `maravel:install`
  - Priorité aux données de la librairie en cas de conflit
  - Fusion intelligente des use statements, traits, propriétés, méthodes et routes
  - Suppression des confirmations interactives (installation automatique et non-destructive)

### Amélioré
- **Installation automatique plus intelligente** : `maravel:install` ne remplace plus les fichiers existants mais les fusionne
- **Préservation des données** : Vos méthodes, propriétés et routes personnalisées sont conservées
- **Messages informatifs** : Affichage détaillé des opérations de fusion effectuées

### Changé
- La commande `maravel:install` ne demande plus de confirmation et effectue une fusion automatique
- Les fichiers existants sont fusionnés au lieu d'être remplacés
- Les routes et contrôleurs personnalisés sont préservés lors de la mise à jour

## [2.5.4] - 2024-12-8
### Ajouté
- **Ajout de la gestion du statut activé et du changement obligatoire du mot de passe via la commande maravel:install** 

## [2.5.3] - 2024-12-7
### Ajouté
- **Ajout de la gestion du user activé/désactivé et du changement obligatoire de mot de passe** 

## [2.5.2] - 2024-12-4
### Réparé
- **Réparation du bug dû à l'appel de la mauvaise fonction dans le show(APIController) pour appliquer le reduce après requête** 

## [2.5.1] - 2024-11-17
### Ajouté
- **Ajout des fonctionnalité de reduce après requêtes sql** 

## [2.4.9] - 2024-11-17
### Ajouté
- **Ajout de la conversion en int des éléments présents dans big_integer_casts dans ModelTrait** 

## [2.4.8] - 2024-11-17
### Ajouté
- **La fonction deleteDirectory() a été ajouté dans APIController** 

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
