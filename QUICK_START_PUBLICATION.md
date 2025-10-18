# 🚀 Guide Rapide de Publication

Votre librairie est prête à être publiée ! Suivez ces étapes simples :

## ✅ Déjà fait

- ✅ Git initialisé
- ✅ Premier commit créé
- ✅ `composer.json` configuré
- ✅ Structure de la librairie prête

## 📝 Étapes à suivre (5 minutes)

### 1️⃣ Créer le dépôt GitHub

```bash
# Allez sur https://github.com/new
# - Repository name: laravel-advanced-api-controller
# - Description: Librairie Laravel avancée pour APIController avec système de permissions
# - Public ✅
# - NE PAS cocher "Add a README file"
```

### 2️⃣ Connecter votre projet au dépôt GitHub

Après avoir créé le dépôt, exécutez ces commandes :

```bash
cd /var/www/html/Projects/Claude/laravel-api-controller-lib

# Remplacer 'mawena' par votre nom d'utilisateur GitHub si différent
git remote add origin https://github.com/mawena/laravel-advanced-api-controller.git

git branch -M main

git push -u origin main
```

### 3️⃣ Créer le premier tag de version

```bash
git tag -a v2.0.0 -m "Version 2.0.0 - Première version stable"
git push origin v2.0.0
```

### 4️⃣ Publier sur Packagist

1. Allez sur https://packagist.org
2. Cliquez sur **"Sign in with GitHub"**
3. Cliquez sur **"Submit"** (en haut à droite)
4. Entrez l'URL : `https://github.com/mawena/laravel-advanced-api-controller`
5. Cliquez sur **"Check"** puis **"Submit"**

### 5️⃣ Configurer les mises à jour automatiques (optionnel)

**Sur Packagist :**
1. Allez dans votre package → **Settings**
2. Copiez l'URL du webhook

**Sur GitHub :**
1. Allez dans votre dépôt → **Settings** → **Webhooks**
2. Cliquez sur **"Add webhook"**
3. Collez l'URL du webhook
4. Content type : `application/json`
5. Sélectionnez **"Just the push event"**
6. Cliquez sur **"Add webhook"**

## 🎉 C'est fait !

Votre librairie est maintenant disponible publiquement. N'importe qui peut l'installer avec :

```bash
composer require mawena/laravel-advanced-api-controller
```

## 🔄 Pour publier une nouvelle version

Utilisez le script automatique :

```bash
./publish.sh 2.1.0 "Description des changements"
```

Ou manuellement :

```bash
git add .
git commit -m "Description des changements"
git push
git tag -a v2.1.0 -m "Version 2.1.0"
git push origin v2.1.0
```

## 📚 Documentation complète

Pour plus de détails, consultez `PUBLICATION.md`

## ⚠️ Important

Si votre nom d'utilisateur GitHub n'est **pas** "mawena", modifiez :
- L'URL du remote Git
- Le `composer.json` (sections `homepage` et `support`)
- Les URLs dans ce guide

