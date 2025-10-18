# Guide de Publication sur Packagist

Ce guide vous explique comment publier votre librairie Laravel sur Packagist pour la rendre installable via Composer.

## Étapes déjà complétées ✅

- [x] Configuration du `composer.json` avec toutes les métadonnées nécessaires
- [x] Initialisation du dépôt Git
- [x] Création d'un `.gitignore` approprié
- [x] Structure de la librairie correctement organisée

## Étapes à suivre pour la publication

### 1. Créer un dépôt sur GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New repository"** (ou `+` en haut à droite → New repository)
3. Nommez le dépôt : `laravel-advanced-api-controller`
4. Description : "Librairie Laravel avancée pour APIController avec système de permissions, modèles enrichis et policies automatiques"
5. Choisissez **Public** (obligatoire pour Packagist gratuit)
6. **Ne cochez pas** "Initialize this repository with a README" (on a déjà les fichiers)
7. Cliquez sur **"Create repository"**

### 2. Lier votre projet local au dépôt GitHub

Une fois le dépôt créé, GitHub vous donne des commandes. Exécutez celles-ci :

```bash
cd /var/www/html/Projects/Claude/maravel

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - Laravel Advanced API Controller v2"

# Ajouter le remote (remplacer USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/mawena/laravel-advanced-api-controller.git

# Créer la branche main
git branch -M main

# Pousser le code
git push -u origin main
```

### 3. Créer un tag de version

Packagist utilise les tags Git pour gérer les versions :

```bash
# Créer un tag pour la version 2.0.0
git tag -a v2.0.0 -m "Version 2.0.0 - Première version stable"

# Pousser le tag
git push origin v2.0.0
```

### 4. Publier sur Packagist

1. Allez sur [Packagist.org](https://packagist.org)
2. Cliquez sur **"Sign in with GitHub"** (recommandé) ou créez un compte
3. Une fois connecté, cliquez sur **"Submit"** en haut à droite
4. Entrez l'URL de votre dépôt GitHub : `https://github.com/mawena/laravel-advanced-api-controller`
5. Cliquez sur **"Check"** puis **"Submit"**

### 5. Configurer les mises à jour automatiques (optionnel mais recommandé)

Pour que Packagist se mette à jour automatiquement à chaque push :

1. Sur Packagist, allez dans votre package
2. Cliquez sur **"Settings"**
3. Copiez l'**URL du webhook**
4. Sur GitHub, allez dans votre dépôt → **Settings** → **Webhooks** → **Add webhook**
5. Collez l'URL du webhook de Packagist
6. Content type : `application/json`
7. Sélectionnez **"Just the push event"**
8. Cliquez sur **"Add webhook"**

## Utilisation de votre librairie

Une fois publiée, n'importe qui pourra installer votre librairie avec :

```bash
composer require mawena/laravel-advanced-api-controller
```

## Publier une nouvelle version

Quand vous voulez publier une mise à jour :

```bash
# Faire vos modifications, puis :
git add .
git commit -m "Description des changements"
git push

# Créer un nouveau tag
git tag -a v2.1.0 -m "Version 2.1.0 - Nouvelles fonctionnalités"
git push origin v2.1.0
```

Si vous avez configuré le webhook, Packagist se mettra à jour automatiquement.

## Conseils pour les versions

Suivez le [Semantic Versioning](https://semver.org/) (SemVer) :

- **MAJOR** (x.0.0) : Changements incompatibles avec les versions précédentes
- **MINOR** (2.x.0) : Nouvelles fonctionnalités compatibles
- **PATCH** (2.0.x) : Corrections de bugs compatibles

Exemples :
- `v2.0.0` : Version initiale
- `v2.1.0` : Ajout de nouvelles fonctionnalités
- `v2.1.1` : Correction de bugs
- `v3.0.0` : Changements majeurs incompatibles

## Badges pour le README (optionnel)

Vous pouvez ajouter des badges dans votre README.md :

```markdown
[![Latest Stable Version](https://poser.pugx.org/mawena/laravel-advanced-api-controller/v)](//packagist.org/packages/mawena/laravel-advanced-api-controller)
[![Total Downloads](https://poser.pugx.org/mawena/laravel-advanced-api-controller/downloads)](//packagist.org/packages/mawena/laravel-advanced-api-controller)
[![License](https://poser.pugx.org/mawena/laravel-advanced-api-controller/license)](//packagist.org/packages/mawena/laravel-advanced-api-controller)
```

## Commandes rapides (script shell)

Un script `publish.sh` a été créé pour faciliter la publication. Utilisez-le comme ceci :

```bash
# Rendre le script exécutable (une seule fois)
chmod +x publish.sh

# Publier une nouvelle version
./publish.sh 2.1.0 "Description des changements"
```

## Problèmes courants

### Le package n'apparaît pas dans les résultats de recherche
- Attendez quelques minutes après la soumission
- Vérifiez que le dépôt est public
- Assurez-vous que le `composer.json` est valide

### Erreur lors de l'installation
- Vérifiez que tous les namespaces dans le code correspondent à ceux du `composer.json`
- Assurez-vous que toutes les dépendances sont listées dans la section `require`

### Le webhook ne fonctionne pas
- Vérifiez l'URL du webhook sur GitHub
- Assurez-vous que le Content-Type est `application/json`
- Consultez les logs de livraison sur GitHub (Settings → Webhooks → Recent Deliveries)

## Support

Pour toute question :
- Documentation Packagist : https://packagist.org/about
- Documentation Composer : https://getcomposer.org/doc/

