# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-06-14

### Ajouté
- **🎉 Système de rôles & permissions DYNAMIQUES (RBAC en base de données)** — refonte majeure remplaçant l'ancien système statique (`profile` enum + `ability_rules` codés en dur).
  - **Nouvelles tables** : `permissions` (couples `action` + `subject`, uniques), `roles` (avec drapeau `is_super_admin`), pivots `permission_role` et `role_user` (relation **many-to-many** : un utilisateur peut avoir plusieurs rôles).
  - **Permissions non figées** : on peut créer autant de permissions que nécessaire à l'exécution (ex : `action: validate, subject: user`), sans toucher au code.
  - **Modèles de base** : `Maravel\Models\Role` et `Maravel\Models\Permission` (à étendre dans `App\Models`).
  - **Trait `Maravel\Models\Concerns\HasRoles`** (inclus d'office dans `AuthenticatableBase`) :
    - relation `roles()`
    - accessor **`ability_rules`** désormais **calculé dynamiquement depuis la base** (rôles → permissions), au **format CASL inchangé** → le frontend Vue.js / CASL continue de fonctionner sans modification
    - helpers : `isAdmin()`, `hasRole($name)`, `hasPermissionTo($action, $subject)`, `assignRole(...)`, `syncRoles(...)`, `removeRole(...)`
  - **Super-admin (double mécanisme)** : un rôle `is_super_admin = true` accorde tous les droits ET injecte automatiquement la règle CASL `{subject: ['all'], action: ['manage']}` dans `ability_rules`.
  - **CRUD complet généré** :
    - `RoleController` : CRUD des rôles + synchronisation des permissions au create/update. Le tableau `permissions` accepte des **ids existants** et/ou des **objets `{action, subject}` créés à la volée** (find-or-create).
    - `PermissionController` : CRUD des permissions (unicité du couple `action` + `subject`).
    - `RolePolicy`, `PermissionPolicy`, et `RolePermissionSeeder` (rôle `admin` + permissions de base).
  - **Routes** : `GET/POST/GET{id}/PUT{id}/DELETE{id}` pour `roles` et `permissions` (sous `auth:sanctum` + `account.status`).
  - **Configuration** : nouvelle section `rbac` dans `config/advanced-api-controller.php` (classes de modèles, noms de tables, super-admin).
  - **Installateur** : `php artisan maravel:install` génère désormais migrations RBAC, modèles, contrôleurs, policies, seeder et routes.

### Modifié
- **BREAKING CHANGE — Suppression du champ `profile`** : le champ enum `profile` sur `users` est supprimé (migration `drop_profile_from_users`) au profit des rôles dynamiques.
- **`AuthenticatableBase`** intègre le trait `HasRoles` et ajoute `ability_rules` à `$appends` par défaut.
- **`PermissionCheckerTrait::isAdmin()`** ne s'appuie plus sur `profile === 'admin'` mais sur la présence de la règle « manage / all » dans `ability_rules`. `hasProfile()` est remplacé par `hasRole()`.
- **`user-model.stub`** réécrit : plus de `profile`, `ability_rules` calculé via le trait `HasRoles`.
- **`model.authenticatable.stub`** aligné sur le RBAC (suppression des méthodes `isAdmin`/`hasProfile`/`getAbilityRulesAttribute` basées sur `profile`).

### Corrigé
- **`BasePolicy::before()` (raccourci « manage all » inopérant)** : la comparaison `$rule["subject"] == "all"` confrontait un tableau à une chaîne (toujours `false`). Le raccourci super-admin repose désormais sur `isAdmin()` (détection « manage / all » via `in_array`). *(finding cloud review bug_003)*
- **`APIController` — fuite de transaction** : ajout de `DB::rollBack()` sur les retours d'erreur précoces de `modelStore()`, `modelStoreMulty()` et `modelUpdate()` (les insertions des itérations précédentes restaient dans une transaction ouverte sur les runtimes longue durée). *(bug_002)*
- **`ControllerHelperTrait::queryHaveFilter()` — HTTP 500 déclenchable** : une relation inexistante (`?have_xxx=true`) levait `RelationNotFoundException`. La relation est désormais validée (try/catch) comme dans `queryRelationAdd()`. *(bug_001)*
- **`FieldFilterMiddleware` — effacement silencieux des données** :
  - un header `X-Maravel-Only` vide après nettoyage (ex : `,,,`) se comportait comme « ne garder aucun champ » → il est désormais traité comme une absence de header. *(bug_009)*
  - un wrapper mixant métadonnées scalaires et modèle imbriqué (ex : `{userToken, user}` du login) était entièrement vidé → garde-fou anti-destruction : on préserve les scalaires et on descend filtrer les sous-objets. *(bug_010)*
- **Stub `auth-controller` — erreurs de validation vides** : `$validator->errors()` (MessageBag) est désormais converti via `->toArray()` avant `responseError()`. *(bug_011)*

### Migration depuis la v3

> ⚠️ **Version majeure avec changements cassants.** Voir la section « Migration v3 → v4 » du README pour le détail.

1. Mettez à jour la dépendance puis lancez `php artisan maravel:install` (génère migrations RBAC, modèles, contrôleurs, policies, seeder).
2. Lancez `php artisan migrate` puis `php artisan db:seed --class=RolePermissionSeeder`.
3. Remplacez l'usage de `profile` : créez les rôles correspondants et assignez-les (`$user->assignRole('admin')`).
4. Le champ `profile` est supprimé de la table `users`. Si vous avez des données existantes, créez les rôles équivalents et migrez les affectations **avant** d'exécuter la migration `drop_profile_from_users` (vous pouvez réordonner/retarder cette migration).
5. Côté frontend : **aucun changement** — `ability_rules` conserve exactement le même format CASL.

## [3.0.0] - 2026-05-29

### Modifié
- **BREAKING CHANGE — Conformité REST des codes de statut HTTP** : les réponses utilisent désormais le vrai code de statut HTTP au lieu de toujours renvoyer `200 OK` avec le code réel dans le corps JSON.
  - `CustomResponseTrait::responseOk()` et `responseOkPaginate()` propagent désormais l'argument `$status` au code HTTP réel (un `store()` répond bien `201 Created`).
  - `CustomResponseTrait::responseError()` renvoie le vrai code HTTP (`403`, `404`, `422`, `500`…) au lieu de `200`.
  - Le champ `"status"` reste présent dans le corps JSON pour compatibilité ascendante côté client.
  - **Migration front-end** : les clients qui testaient `response.data.status` continuent de fonctionner ; ceux qui supposaient un HTTP `200` systématique doivent gérer les codes 4xx/5xx (ex : intercepteurs Axios `catch`).

### Corrigé
- **Codes de statut sémantiques (RFC 7231 / 4918)** :
  - Échec de validation : `400` → **`422 Unprocessable Entity`** (`store`, `store_multiple`, `update`, validations manuelles).
  - ID manquant en mise à jour : `401` → **`422`** (401 est réservé à l'authentification).
  - Stub `auth-controller` : échec de connexion (mauvais identifiants) `400` → **`401 Unauthorized`** ; garde `$user` désormais vérifié avant `Hash::check()` ; échec de déconnexion → **`500`**.
  - Stub `user-controller` : changement de mot de passe — erreurs de validation et mot de passe actuel incorrect `400` → **`422`**.

## [2.9.0] - 2026-05-29

### Ajouté
- **Compatibilité Laravel 13** :
  - Ajout de `^13.0` dans la contrainte `laravel/framework` de `composer.json`
  - Ajout de `orchestra/testbench ^11.0` dans les dépendances de développement
  - Ajout de `phpunit/phpunit ^11.0` dans les dépendances de développement
  - Aucune modification du code PHP nécessaire : les APIs utilisées (ServiceProvider, Router, middlewares) sont stables et inchangées dans Laravel 13

## [2.8.0] - 2026-05-29

### Ajouté
- **Filtrage dynamique des champs via headers HTTP** (`FieldFilterMiddleware`) :
  - Nouveau middleware `Maravel\Http\Middleware\FieldFilterMiddleware` enregistré automatiquement sous l'alias `maravel.fields`
  - Header `X-Maravel-Only: field1,field2` : la réponse ne contient QUE les champs listés
  - Header `X-Maravel-Except: field1,field2` : la réponse contient tout SAUF les champs listés
  - Cumul des deux headers : `X-Maravel-Only` appliqué en premier, puis `X-Maravel-Except` sur la sélection restreinte
  - Fonctionne sur toutes les réponses (index, show, store, update) sans modification des contrôleurs existants
  - Gestion des structures imbriquées : listes de modèles, wrappers `{"model": {...}}` et attributs scalaires
- **Nouveau filtre de présence de relation** (`queryHaveFilter`) dans `ControllerHelperTrait` :
  - `?have_relation=true` → `whereHas($relation)` : ne retourner que les enregistrements ayant la relation
  - `?doesnt_have_relation=true` → `whereDoesntHave($relation)` : exclure les enregistrements ayant la relation
  - Support des relations imbriquées via le séparateur `>` (ex: `have_category>images=true`)

### Corrigé
- **`BasePolicy::before()`** : `$connectedUserArray` était créé mais `ability_rules` était lu via `$connectedUser["ability_rules"]` au lieu de `$connectedUserArray["ability_rules"]` — le `toArray()` n'était pas utilisé
- **`ModelTrait` (big_integer_casts)** : comparaison `!= null` remplacée par `!== null` — en PHP, `0 == null` est `true`, ce qui faisait sauter silencieusement les colonnes à valeur `0`
- **`CustomResponseTrait::responseError()`** : les valeurs d'erreur non-tableau provoquaient une erreur dans `implode()` — ajout d'une vérification `is_array()` avant le join
- **`user-model.stub`** : labels `password_change_required` mis à jour (`Obligatoire` / `Facultatif` au lieu de `Oui` / `Non`)

## [2.7.0] - 2025-12-13
### Modifié
- **Refonte du stub user-model.stub** : Utilisation complète de la nouvelle structure $enumCasts
  - **BREAKING CHANGE** : Suppression de la méthode `getAbilityRulesAttribute()` - Les ability_rules sont maintenant générées via $enumCasts
  - Ajout de 4 enum casts dans le modèle User :
    - `profile` → `profile_fr` : Labels français pour les profils (Administrateur, Métier)
    - `profile` → `ability_rules` : Génération automatique des règles de permissions via enumCasts
    - `activated` → `activated_fr` : Labels "Oui"/"Non" pour le statut d'activation
    - `password_change_required` → `password_change_required_fr` : Labels "Oui"/"Non" pour le changement de mot de passe
  - Les ability_rules sont maintenant définies de manière statique dans $enumCasts au lieu d'être calculées dynamiquement
  - Simplifie la gestion des permissions en utilisant le système de casts unifié

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
