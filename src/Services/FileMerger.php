<?php

namespace Maravel\Services;

use Illuminate\Support\Facades\File;

/**
 * Service pour fusionner intelligemment des fichiers PHP
 *
 * Cette classe permet de fusionner du code PHP existant avec du nouveau code
 * en évitant les duplications et en priorisant les données de la librairie en cas de conflit.
 */
class FileMerger
{
    /**
     * Fusionne le modèle User existant avec le stub de Maravel
     *
     * @param string $existingContent Contenu du fichier User.php existant
     * @param string $stubContent Contenu du stub user-model.stub
     * @return string Le contenu fusionné
     */
    public function mergeUserModel(string $existingContent, string $stubContent): string
    {
        // Parser le fichier existant
        $existingUses = $this->extractUseStatements($existingContent);
        $existingParentClass = $this->extractParentClass($existingContent);
        $existingTraits = $this->extractTraits($existingContent);
        $existingProperties = $this->extractClassProperties($existingContent);
        $existingMethods = $this->extractMethods($existingContent);

        // Parser le stub
        $stubUses = $this->extractUseStatements($stubContent);
        $stubParentClass = $this->extractParentClass($stubContent);
        $stubTraits = $this->extractTraits($stubContent);
        $stubProperties = $this->extractClassProperties($stubContent);
        $stubMethods = $this->extractMethods($stubContent);

        // Fusionner les use statements (priorité au stub)
        $mergedUses = $this->mergeUseStatements($existingUses, $stubUses);

        // Priorité à la classe parent du stub
        $parentClass = $stubParentClass ?: $existingParentClass;

        // Fusionner les traits
        $mergedTraits = array_unique(array_merge($existingTraits, $stubTraits));

        // Fusionner les propriétés (priorité au stub pour les conflits)
        $mergedProperties = $this->mergeProperties($existingProperties, $stubProperties);

        // Fusionner les méthodes (priorité au stub pour les conflits)
        $mergedMethods = $this->mergeMethods($existingMethods, $stubMethods);

        // Générer le nouveau contenu
        return $this->generateUserModelContent(
            $mergedUses,
            $parentClass,
            $mergedTraits,
            $mergedProperties,
            $mergedMethods
        );
    }

    /**
     * Fusionne le contrôleur User existant avec le stub de Maravel
     *
     * @param string $existingContent Contenu du fichier UserController.php existant
     * @param string $stubContent Contenu du stub user-controller.stub
     * @return string Le contenu fusionné
     */
    public function mergeUserController(string $existingContent, string $stubContent): string
    {
        // Parser le fichier existant
        $existingUses = $this->extractUseStatements($existingContent);
        $existingParentClass = $this->extractParentClass($existingContent);
        $existingProperties = $this->extractClassProperties($existingContent);
        $existingMethods = $this->extractMethods($existingContent);
        $existingConstructor = $this->extractConstructorContent($existingContent);

        // Parser le stub
        $stubUses = $this->extractUseStatements($stubContent);
        $stubParentClass = $this->extractParentClass($stubContent);
        $stubProperties = $this->extractClassProperties($stubContent);
        $stubMethods = $this->extractMethods($stubContent);
        $stubConstructor = $this->extractConstructorContent($stubContent);

        // Fusionner les use statements
        $mergedUses = $this->mergeUseStatements($existingUses, $stubUses);

        // Priorité à la classe parent du stub
        $parentClass = $stubParentClass ?: $existingParentClass;

        // Fusionner les propriétés (priorité au stub)
        $mergedProperties = $this->mergeProperties($existingProperties, $stubProperties);

        // Fusionner le constructeur (priorité au stub)
        $mergedConstructor = $stubConstructor ?: $existingConstructor;

        // Fusionner les méthodes (priorité au stub)
        $mergedMethods = $this->mergeMethods($existingMethods, $stubMethods);

        // Extraire le docblock de classe
        $classDocblock = $this->extractClassDocblock($stubContent) ?: $this->extractClassDocblock($existingContent);

        // Générer le nouveau contenu
        return $this->generateControllerContent(
            $mergedUses,
            $classDocblock,
            $parentClass,
            $mergedProperties,
            $mergedConstructor,
            $mergedMethods
        );
    }

    /**
     * Fusionne la policy User existante avec le stub de Maravel
     *
     * @param string $existingContent Contenu du fichier UserPolicy.php existant
     * @param string $stubContent Contenu du stub user-policy.stub
     * @return string Le contenu fusionné
     */
    public function mergeUserPolicy(string $existingContent, string $stubContent): string
    {
        // Parser le fichier existant
        $existingUses = $this->extractUseStatements($existingContent);
        $existingParentClass = $this->extractParentClass($existingContent);
        $existingProperties = $this->extractClassProperties($existingContent);
        $existingMethods = $this->extractMethods($existingContent);

        // Parser le stub
        $stubUses = $this->extractUseStatements($stubContent);
        $stubParentClass = $this->extractParentClass($stubContent);
        $stubProperties = $this->extractClassProperties($stubContent);
        $stubMethods = $this->extractMethods($stubContent);

        // Fusionner les use statements
        $mergedUses = $this->mergeUseStatements($existingUses, $stubUses);

        // Priorité à la classe parent du stub
        $parentClass = $stubParentClass ?: $existingParentClass;

        // Fusionner les propriétés (priorité au stub)
        $mergedProperties = $this->mergeProperties($existingProperties, $stubProperties);

        // Fusionner les méthodes (priorité au stub)
        $mergedMethods = $this->mergeMethods($existingMethods, $stubMethods);

        // Extraire le docblock de classe
        $classDocblock = $this->extractClassDocblock($stubContent) ?: $this->extractClassDocblock($existingContent);

        // Générer le nouveau contenu
        return $this->generatePolicyContent(
            $mergedUses,
            $classDocblock,
            $parentClass,
            $mergedProperties,
            $mergedMethods
        );
    }

    /**
     * Fusionne les routes API existantes avec le stub de Maravel
     *
     * @param string $existingContent Contenu du fichier api.php existant
     * @param string $stubContent Contenu du stub api-routes.stub
     * @return string Le contenu fusionné
     */
    public function mergeApiRoutes(string $existingContent, string $stubContent): string
    {
        // Extraire les use statements
        $existingUses = $this->extractUseStatements($existingContent);
        $stubUses = $this->extractUseStatements($stubContent);
        $mergedUses = $this->mergeUseStatements($existingUses, $stubUses);

        // Extraire les routes existantes
        $existingRoutes = $this->extractRouteDefinitions($existingContent);
        $stubRoutes = $this->extractRouteDefinitions($stubContent);

        // Vérifier si les routes AuthController et UserController existent déjà
        $hasAuthController = $this->containsControllerRoutes($existingContent, 'AuthController');
        $hasUserController = $this->containsControllerRoutes($existingContent, 'UserController');

        // Si les routes existent déjà, on garde l'existant et on ajoute uniquement ce qui manque
        if ($hasAuthController && $hasUserController) {
            // Tout existe déjà, on garde l'existant mais on met à jour les use statements
            $contentWithoutUses = $this->removeUseStatements($existingContent);
            return $this->generateRoutesContent($mergedUses, $contentWithoutUses);
        }

        // Sinon, on utilise le stub complet (priorité à la librairie)
        return $stubContent;
    }

    /**
     * Extrait les déclarations use d'un fichier PHP
     *
     * @param string $content Contenu du fichier
     * @return array Liste des use statements
     */
    protected function extractUseStatements(string $content): array
    {
        $uses = [];
        preg_match_all('/^use\s+([^;]+);/m', $content, $matches);

        if (!empty($matches[1])) {
            foreach ($matches[1] as $use) {
                $uses[] = trim($use);
            }
        }

        return array_unique($uses);
    }

    /**
     * Extrait la classe parent d'une classe PHP
     *
     * @param string $content Contenu du fichier
     * @return string|null Nom de la classe parent
     */
    protected function extractParentClass(string $content): ?string
    {
        if (preg_match('/class\s+\w+\s+extends\s+(\w+)/', $content, $matches)) {
            return $matches[1];
        }

        return null;
    }

    /**
     * Extrait les traits utilisés dans une classe
     *
     * @param string $content Contenu du fichier
     * @return array Liste des traits
     */
    protected function extractTraits(string $content): array
    {
        $traits = [];

        if (preg_match('/use\s+([^;]+);/m', $content, $matches)) {
            $traitsList = explode(',', $matches[1]);
            foreach ($traitsList as $trait) {
                $traits[] = trim($trait);
            }
        }

        return $traits;
    }

    /**
     * Extrait les propriétés d'une classe PHP
     *
     * @param string $content Contenu du fichier
     * @return array Tableau associatif [nom => contenu complet]
     */
    protected function extractClassProperties(string $content): array
    {
        $properties = [];

        // Extraire les propriétés avec leurs commentaires et valeurs
        preg_match_all('/\/\*\*[\s\S]*?\*\/\s*(?:public|protected|private)\s+(?:static\s+)?(?:\?\w+\s+)?\$(\w+)\s*=?\s*([^;]*);/s', $content, $matches, PREG_SET_ORDER);

        foreach ($matches as $match) {
            $propertyName = $match[1];
            $properties[$propertyName] = trim($match[0]);
        }

        // Extraire aussi les propriétés sans docblock
        preg_match_all('/(?:^|\n)\s*((?:public|protected|private)\s+(?:static\s+)?(?:\?\w+\s+)?\$(\w+)\s*=?\s*([^;]*);)/m', $content, $matches, PREG_SET_ORDER);

        foreach ($matches as $match) {
            $propertyName = $match[2];
            if (!isset($properties[$propertyName])) {
                $properties[$propertyName] = trim($match[1]);
            }
        }

        return $properties;
    }

    /**
     * Extrait les méthodes d'une classe PHP
     *
     * @param string $content Contenu du fichier
     * @return array Tableau associatif [nom => contenu complet]
     */
    protected function extractMethods(string $content): array
    {
        $methods = [];

        // Pattern pour capturer les méthodes avec leur docblock
        $pattern = '/(?:\/\*\*[\s\S]*?\*\/\s*)?(?:public|protected|private)\s+(?:static\s+)?function\s+(\w+)\s*\([^)]*\)(?:\s*:\s*[^{]+)?\s*\{/';

        preg_match_all($pattern, $content, $matches, PREG_OFFSET_CAPTURE);

        foreach ($matches[0] as $index => $match) {
            $methodName = $matches[1][$index][0];
            $startPos = $match[1];

            // Trouver la fin de la méthode en comptant les accolades
            $braceCount = 0;
            $inMethod = false;
            $methodContent = '';

            for ($i = $startPos; $i < strlen($content); $i++) {
                $char = $content[$i];
                $methodContent .= $char;

                if ($char === '{') {
                    $braceCount++;
                    $inMethod = true;
                } elseif ($char === '}') {
                    $braceCount--;

                    if ($inMethod && $braceCount === 0) {
                        break;
                    }
                }
            }

            $methods[$methodName] = trim($methodContent);
        }

        return $methods;
    }

    /**
     * Extrait le contenu du constructeur
     *
     * @param string $content Contenu du fichier
     * @return string|null Contenu du constructeur
     */
    protected function extractConstructorContent(string $content): ?string
    {
        $methods = $this->extractMethods($content);
        return $methods['__construct'] ?? null;
    }

    /**
     * Extrait le docblock de classe
     *
     * @param string $content Contenu du fichier
     * @return string|null Docblock de la classe
     */
    protected function extractClassDocblock(string $content): ?string
    {
        if (preg_match('/\/\*\*[\s\S]*?\*\/\s*class\s+/', $content, $matches)) {
            return trim(str_replace('class ', '', $matches[0]));
        }

        return null;
    }

    /**
     * Fusionne les use statements en évitant les doublons
     *
     * @param array $existing Use statements existants
     * @param array $stub Use statements du stub
     * @return array Use statements fusionnés
     */
    protected function mergeUseStatements(array $existing, array $stub): array
    {
        // Priorité au stub, mais on garde les use statements existants non présents dans le stub
        return array_unique(array_merge($existing, $stub));
    }

    /**
     * Fusionne les propriétés de classe
     *
     * @param array $existing Propriétés existantes
     * @param array $stub Propriétés du stub
     * @return array Propriétés fusionnées
     */
    protected function mergeProperties(array $existing, array $stub): array
    {
        // Priorité au stub pour les conflits
        return array_merge($existing, $stub);
    }

    /**
     * Fusionne les méthodes de classe
     *
     * @param array $existing Méthodes existantes
     * @param array $stub Méthodes du stub
     * @return array Méthodes fusionnées
     */
    protected function mergeMethods(array $existing, array $stub): array
    {
        // Priorité au stub pour les conflits
        return array_merge($existing, $stub);
    }

    /**
     * Génère le contenu du modèle User fusionné
     */
    protected function generateUserModelContent(
        array $uses,
        ?string $parentClass,
        array $traits,
        array $properties,
        array $methods
    ): string {
        $content = "<?php\n\nnamespace App\\Models;\n\n";

        // Ajouter les use statements
        foreach ($uses as $use) {
            $content .= "use {$use};\n";
        }

        $content .= "\nclass User extends " . ($parentClass ?: 'Authenticatable') . "\n{\n";

        // Ajouter les traits
        if (!empty($traits)) {
            $content .= "    use " . implode(', ', $traits) . ";\n\n";
        }

        // Ajouter les propriétés
        foreach ($properties as $property) {
            $content .= "    {$property}\n\n";
        }

        // Ajouter les méthodes
        foreach ($methods as $method) {
            $content .= "    {$method}\n\n";
        }

        $content .= "}\n";

        return $content;
    }

    /**
     * Génère le contenu du contrôleur fusionné
     */
    protected function generateControllerContent(
        array $uses,
        ?string $classDocblock,
        ?string $parentClass,
        array $properties,
        ?string $constructor,
        array $methods
    ): string {
        $content = "<?php\n\nnamespace App\\Http\\Controllers\\API;\n\n";

        // Ajouter les use statements
        foreach ($uses as $use) {
            $content .= "use {$use};\n";
        }

        $content .= "\n";

        // Ajouter le docblock de classe
        if ($classDocblock) {
            $content .= "{$classDocblock}\n";
        }

        $content .= "class UserController extends " . ($parentClass ?: 'Controller') . "\n{\n";

        // Ajouter les propriétés
        foreach ($properties as $property) {
            $content .= "    {$property}\n\n";
        }

        // Ajouter le constructeur
        if ($constructor) {
            $content .= "    {$constructor}\n\n";
        }

        // Ajouter les méthodes
        foreach ($methods as $methodName => $method) {
            if ($methodName !== '__construct') {
                $content .= "    {$method}\n\n";
            }
        }

        $content .= "}\n";

        return $content;
    }

    /**
     * Génère le contenu de la policy fusionnée
     */
    protected function generatePolicyContent(
        array $uses,
        ?string $classDocblock,
        ?string $parentClass,
        array $properties,
        array $methods
    ): string {
        $content = "<?php\n\nnamespace App\\Policies;\n\n";

        // Ajouter les use statements
        foreach ($uses as $use) {
            $content .= "use {$use};\n";
        }

        $content .= "\n";

        // Ajouter le docblock de classe
        if ($classDocblock) {
            $content .= "{$classDocblock}\n";
        }

        $content .= "class UserPolicy extends " . ($parentClass ?: 'Policy') . "\n{\n";

        // Ajouter les propriétés
        foreach ($properties as $property) {
            $content .= "    {$property}\n\n";
        }

        // Ajouter les méthodes
        foreach ($methods as $method) {
            $content .= "    {$method}\n\n";
        }

        $content .= "}\n";

        return $content;
    }

    /**
     * Génère le contenu des routes fusionnées
     */
    protected function generateRoutesContent(array $uses, string $routeDefinitions): string
    {
        $content = "<?php\n\n";

        // Ajouter les use statements
        foreach ($uses as $use) {
            $content .= "use {$use};\n";
        }

        $content .= "\n" . trim($routeDefinitions) . "\n";

        return $content;
    }

    /**
     * Extrait les définitions de routes
     */
    protected function extractRouteDefinitions(string $content): string
    {
        // Retirer les use statements pour garder uniquement les routes
        return $this->removeUseStatements($content);
    }

    /**
     * Retire les use statements d'un fichier
     */
    protected function removeUseStatements(string $content): string
    {
        $lines = explode("\n", $content);
        $result = [];
        $skipUse = false;

        foreach ($lines as $line) {
            $trimmed = trim($line);

            if ($trimmed === '<?php' || empty($trimmed)) {
                continue;
            }

            if (str_starts_with($trimmed, 'use ')) {
                $skipUse = true;
                continue;
            }

            if ($skipUse && !str_starts_with($trimmed, 'use ')) {
                $skipUse = false;
            }

            if (!$skipUse) {
                $result[] = $line;
            }
        }

        return implode("\n", $result);
    }

    /**
     * Vérifie si un contenu contient des routes pour un contrôleur donné
     */
    protected function containsControllerRoutes(string $content, string $controllerName): bool
    {
        return str_contains($content, $controllerName);
    }
}
