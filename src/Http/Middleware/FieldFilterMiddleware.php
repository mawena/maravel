<?php

namespace Maravel\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Filtre les champs retournés dans les réponses JSON via des headers HTTP.
 *
 * Headers supportés :
 *   X-Maravel-Only:   liste de champs séparés par virgule → ne retourner QUE ces champs
 *   X-Maravel-Except: liste de champs séparés par virgule → retourner TOUT SAUF ces champs
 *
 * Si les deux headers sont présents, X-Maravel-Only est appliqué en premier,
 * puis X-Maravel-Except retire des champs de la sélection restreinte.
 */
class FieldFilterMiddleware
{
    public function handle(Request $request, Closure $next): mixed
    {
        $response = $next($request);

        $only   = $request->header('X-Maravel-Only');
        $except = $request->header('X-Maravel-Except');

        if (!$only && !$except) {
            return $response;
        }

        if (!$response instanceof JsonResponse) {
            return $response;
        }

        $onlyFields   = $only   ? array_values(array_filter(array_map('trim', explode(',', $only))))   : null;
        $exceptFields = $except ? array_values(array_filter(array_map('trim', explode(',', $except)))) : [];

        // Un header "Only" présent mais vide après nettoyage (ex: ",,," ou "  ")
        // doit se comporter comme une absence de header, et non vider toute la réponse.
        if (empty($onlyFields)) {
            $onlyFields = null;
        }

        $body = $response->getData(true);

        if (array_key_exists('data', $body)) {
            $body['data'] = $this->filterFields($body['data'], $onlyFields, $exceptFields);
        }

        $response->setData($body);

        return $response;
    }

    /**
     * Applique le filtre récursivement sur la structure de données.
     *
     * - Liste (array séquentiel) → filtre chaque élément
     * - Associatif avec valeurs scalaires → attributs d'un modèle → on filtre ici
     * - Associatif tout-tableaux → wrapper ex: {"user": {...}} → on descend
     */
    private function filterFields(mixed $data, ?array $only, array $except): mixed
    {
        if (!is_array($data)) {
            return $data;
        }

        if (array_is_list($data)) {
            return array_values(array_map(
                fn (mixed $item) => $this->filterFields($item, $only, $except),
                $data
            ));
        }

        // Associatif : si au moins une valeur est scalaire, on considère ce nœud
        // comme un sac d'attributs de modèle.
        $hasScalar = false;
        foreach ($data as $value) {
            if (!is_array($value)) {
                $hasScalar = true;
                break;
            }
        }

        if (!$hasScalar) {
            // Toutes les valeurs sont des tableaux → wrapper (ex: {"user": {...}})
            // → on descend dans chaque entrée.
            $result = [];
            foreach ($data as $key => $value) {
                $result[$key] = $this->filterFields($value, $only, $except);
            }

            return $result;
        }

        // Sac d'attributs de modèle → on applique le filtre à ce niveau.
        $filtered = $this->applyFieldFilter($data, $only, $except);

        // Garde-fou anti-destruction : si l'inclusion "Only" vide totalement un nœud
        // non vide, c'est qu'aucun des champs demandés n'appartient à ce nœud → il
        // s'agit en réalité d'un wrapper mixte (ex: {"userToken": "...", "user": {...}}
        // renvoyé par le login). On préserve alors les valeurs scalaires (métadonnées)
        // et on descend filtrer les sous-objets, au lieu de tout effacer.
        if ($only !== null && empty($filtered) && !empty($data)) {
            $result = [];
            foreach ($data as $key => $value) {
                $result[$key] = is_array($value)
                    ? $this->filterFields($value, $only, $except)
                    : $value;
            }

            return $result;
        }

        return $filtered;
    }

    /**
     * Applique l'inclusion (Only) puis l'exclusion (Except) sur un tableau plat d'attributs.
     */
    private function applyFieldFilter(array $data, ?array $only, array $except): array
    {
        if ($only !== null) {
            $data = array_intersect_key($data, array_flip($only));
        }

        if (!empty($except)) {
            $data = array_diff_key($data, array_flip($except));
        }

        return $data;
    }
}
