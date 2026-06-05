<?php

/**
 * Script de test pour vérifier la structure des commandes
 * 
 * Ce script simule l'enregistrement des commandes et vérifie
 * que tous les fichiers nécessaires sont présents.
 */

echo "=== Test des Commandes Laravel Advanced API Controller ===\n\n";

// Vérification des fichiers de commandes
$commands = [
    'MakeAdvancedController' => 'src/Console/Commands/MakeAdvancedController.php',
    'MakeAdvancedPolicy' => 'src/Console/Commands/MakeAdvancedPolicy.php',
    'MakeController' => 'src/Console/Commands/MakeController.php',
    'MakePolicy' => 'src/Console/Commands/MakePolicy.php',
];

echo "1. Vérification des fichiers de commandes :\n";
foreach ($commands as $name => $path) {
    if (file_exists($path)) {
        echo "   ✓ $name : $path\n";
    } else {
        echo "   ✗ $name : $path (MANQUANT)\n";
    }
}

// Vérification des stubs
$stubs = [
    'advanced-controller.stub' => 'src/Stubs/advanced-controller.stub',
    'advanced-policy.stub' => 'src/Stubs/advanced-policy.stub',
];

echo "\n2. Vérification des fichiers de stubs :\n";
foreach ($stubs as $name => $path) {
    if (file_exists($path)) {
        echo "   ✓ $name : $path\n";
    } else {
        echo "   ✗ $name : $path (MANQUANT)\n";
    }
}

// Vérification du ServiceProvider
echo "\n3. Vérification du ServiceProvider :\n";
$serviceProviderPath = 'src/Providers/AdvancedApiControllerServiceProvider.php';
if (file_exists($serviceProviderPath)) {
    echo "   ✓ ServiceProvider : $serviceProviderPath\n";
    
    // Vérifier que les commandes sont enregistrées
    $content = file_get_contents($serviceProviderPath);
    $expectedCommands = ['MakeAdvancedPolicy', 'MakeAdvancedController', 'MakePolicy', 'MakeController'];
    
    echo "   Vérification de l'enregistrement des commandes :\n";
    foreach ($expectedCommands as $command) {
        if (strpos($content, $command) !== false) {
            echo "     ✓ $command enregistré\n";
        } else {
            echo "     ✗ $command non enregistré\n";
        }
    }
} else {
    echo "   ✗ ServiceProvider : $serviceProviderPath (MANQUANT)\n";
}

// Vérification de la documentation
echo "\n4. Vérification de la documentation :\n";
$docPath = 'COMMANDES_AVANCEES.md';
if (file_exists($docPath)) {
    echo "   ✓ Documentation : $docPath\n";
} else {
    echo "   ✗ Documentation : $docPath (MANQUANT)\n";
}

echo "\n=== Résumé ===\n";
echo "Les commandes suivantes sont maintenant disponibles :\n";
echo "• make:controller (version avancée)\n";
echo "• make:policy (version avancée)\n";
echo "• make:advanced-controller\n";
echo "• make:advanced-policy\n";
echo "\nPour utiliser ces commandes dans un projet Laravel :\n";
echo "1. Installez la bibliothèque via Composer\n";
echo "2. Enregistrez le ServiceProvider dans config/app.php\n";
echo "3. Utilisez les commandes avec 'php artisan make:controller' ou 'php artisan make:policy'\n";
