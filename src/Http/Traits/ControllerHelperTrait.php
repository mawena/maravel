<?php

namespace Maravel\Http\Traits;

use Exception;
use Google\Client;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait ControllerHelperTrait
{
    function extractSuffixes(array $list, string $prefix): array
    {
        $resultats = [];
        foreach ($list as $item => $value) {
            if (str_starts_with($item, $prefix)) {
                if ($value = "true") {
                    $resultats[] = substr($item, strlen($prefix));
                }
            }
        }

        return $resultats;
    }

    public function reduceCollection($modelCollection, $requestData, $function_prefix = "reduce_")
    {
        if ($modelCollection->count() > 0) {
            $function_name_list = $this->extractSuffixes($requestData, $function_prefix);
            $model = $modelCollection[0];
            foreach ($function_name_list as $TmpfunctionName) {
                $functionName = Str::camel($TmpfunctionName) . "Reducer";
                if (method_exists($model, $functionName)) {
                    $modelCollection = $model->$functionName($modelCollection, $requestData);
                }
            }
        }
        return $modelCollection;
    }

    /**
     * Permet d'ajouter des filtres sur un objet Eloquent
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryFilter($query, $requestData, $modelName)
    {
        $modelPath = "\\App\\Models\\$modelName";
        foreach ($requestData as $filter => $value) {
            if (in_array($filter, Schema::getColumnListing((new $modelPath)->getTable())) && $requestData[$filter]) {
                if (in_array($requestData[$filter], ["true", "false"])) {
                    $requestData[$filter] = ($requestData[$filter] == "true") ? 1 : 0;
                }
                $query->where($filter, $requestData[$filter]);
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres minimum sur un objet Eloquent avec min
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryFilterMin($query, $requestData, $modelName)
    {
        $modelPath = "\\App\\Models\\$modelName";
        foreach ($requestData as $filter => $value) {

            if (Str::startsWith($filter, "min<")) {
                $filter_name = Str::after($filter, "min<");
                if (in_array($filter_name, Schema::getColumnListing((new $modelPath)->getTable())) && $requestData[$filter]) {
                    $filters = explode('-', $requestData[$filter]);
                    $query->where($filter_name, '>=', $filters);
                }
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres maximum sur un objet Eloquent avec min
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryFilterMax($query, $requestData, $modelName)
    {
        $modelPath = "\\App\\Models\\$modelName";
        foreach ($requestData as $filter => $value) {

            if (Str::startsWith($filter, "max<")) {
                $filter_name = Str::after($filter, "max<");
                if (in_array($filter_name, Schema::getColumnListing((new $modelPath)->getTable())) && $requestData[$filter]) {
                    $filters = explode('-', $requestData[$filter]);
                    $query->where($filter_name, '<=', $filters);
                }
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres sur un objet Eloquent avec in
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryFilterIn($query, $requestData, $modelName)
    {
        $modelPath = "\\App\\Models\\$modelName";
        foreach ($requestData as $filter => $value) {

            if (Str::startsWith($filter, "in_")) {
                $filter_name = Str::after($filter, "in_");
                if (in_array($filter_name, Schema::getColumnListing((new $modelPath)->getTable())) && $requestData[$filter]) {
                    $filters = explode('-', $requestData[$filter]);
                    $query->whereIn($filter_name, $filters);
                }
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres en négation sur un objet Eloquent avec in
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryFilterNotIn($query, $requestData, $modelName)
    {
        $modelPath = "\\App\\Models\\$modelName";
        foreach ($requestData as $filter => $value) {

            if (Str::startsWith($filter, "not_in_")) {
                $filter_name = Str::after($filter, "not_in_");
                if (in_array($filter_name, Schema::getColumnListing((new $modelPath)->getTable())) && $requestData[$filter]) {
                    $filters = explode('-', $requestData[$filter]);
                    $query->whereNotIn($filter_name, $filters);
                }
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres json sur un objet Eloquent
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$jsonFilter			Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @param 	mixed 	$prefix				Le prefix pour reconnaître le filtre
     * @return 	mixed
     */
    public function queryJSONFilter($query, $jsonFilter, $modelName, $prefix = "json_with_")
    {
        $jsonFilterList = collect($jsonFilter)->filter(function ($value, $key) use ($prefix) {
            return strpos($key, $prefix) === 0;
        });

        $modelPath = "\\App\\Models\\$modelName";
        foreach ($jsonFilterList as $jsonFilter => $value) {
            $jsonFilter = substr($jsonFilter, strlen($prefix));
            if (in_array($jsonFilter, Schema::getColumnListing((new $modelPath)->getTable())) && $jsonFilter[$jsonFilter]) {
                if (in_array($jsonFilter[$jsonFilter], ["true", "false"])) {
                    $jsonFilter[$jsonFilter] = ($jsonFilter[$jsonFilter] == "true") ? 1 : 0;
                }
                $query->where($jsonFilter, $jsonFilter[$jsonFilter]);
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des filtres sur les relation d'un objet eloquent par inclusion
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryRelationFilter($query, $requestData, $prefix = "relation_filter_in", $filterMethod = "in")
    {
        $relationData = collect($requestData)->filter(function ($value, $key) use ($prefix) {
            return strpos($key, $prefix) === 0;
        });
        foreach ($relationData as $filter => $value) {
            if (in_array($value, ["true", "false"])) {
                $relationData[$filter] = ($value == "true") ? 1 : 0;
            }
            $filterData = str_replace(">", ".", substr($filter, strlen($prefix)));
            $filterData = explode('-', $filterData);
            $relation = $filterData[0];
            $filter = $filterData[1];
            $valueArray = array_filter(explode('-', $value));
            if ($valueArray) {
                if ($filterMethod == "in") {
                    $query->whereHas($relation, function ($query) use ($filter, $valueArray, $filterMethod) {
                        $query->whereIn($filter, $valueArray);
                    });
                } else {
                    $query->whereDoesntHave($relation, function ($query) use ($filter, $valueArray, $filterMethod) {
                        $query->whereIn($filter, $valueArray);
                    });
                }
            }
        }
        return $query;
    }

    /**
     * Permet d'ajouter des relation sur un objet Eloquent
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les données de la requete
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function queryRelationAdd($query, $requestData, $modelName)
    {
        $modelPath = "App\\Models\\$modelName";
        $currentObjet = new $modelPath();
        $relations = collect($requestData)->filter(function ($value, $key) {
            return strpos($key, 'with_') === 0;
        });
        $validatedRelations = [];
        foreach ($relations as $relation => $value) {
            $relation = str_replace("<", ".", substr($relation, 5));
            try {
                $currentObjet->load($relation);
                ($value == "true") ? $validatedRelations[] = $relation : null;
            } catch (RelationNotFoundException $ex) {
                continue;
            }
        }
        $query->with($validatedRelations);
        return $query;
    }

    /**
     * Permet d'ajouter un filtre de recherche sur un objet Eloquent
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$columns			Les colones où rechercher
     * @param 	mixed 	$search				Le mot clé à rechercher
     * @return 	mixed
     */
    public function querySearch($query, $columns, $search)
    {
        $query
            ->where(function ($query) use ($columns, $search) {
                foreach ($columns as $column) {
                    $query->orWhere($column, 'LIKE', "%$search%");
                }
            });
        return $query;
    }

    /**
     * Permet d'ajouter un filtre de recherche sur un objet Eloquent
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$columns			Les colones où rechercher
     * @param 	mixed 	$search				Le mot clé à rechercher
     * @return 	mixed
     */
    public function queryDistinct($query, $distinct)
    {
        $query->select($distinct)->distinct();
        return $query;
    }

    /**
     * Permet d'ajouter des relation sur un model laravel via chargement load
     * @param 	mixed 	$query				L'objet Eloquent
     * @param 	mixed 	$requestData		Les valeurs à utiliser pour appliquer les relations
     * @param 	mixed 	$modelName			Le nom du model
     * @return 	mixed
     */
    public function modelRelationLoad($model, $requestData, $modelName)
    {
        $modelPath = "App\\Models\\$modelName";
        $currentObjet = new $modelPath();
        $relations = collect($requestData)->filter(function ($value, $key) {
            return strpos($key, 'with_') === 0;
        });
        $validatedRelations = [];
        foreach ($relations as $relation => $value) {
            $relation = str_replace("<", ".", substr($relation, 5));
            try {
                $currentObjet->load($relation);
                ($value == "true") ? $validatedRelations[] = $relation : null;
            } catch (RelationNotFoundException $ex) {
                continue;
            }
        }
        $model->load($validatedRelations);
        return $model;
    }

    /**
     * Vérifie si on a à faire à un base64 valide
     * @param 	mixed	$base64				Le base64
     * @param 	mixed	$validateType		Les types de base64 valides
     * @return	boolean
     */
    public function checkIsBase64Validated($base64, $validatedTypes = ["jpg", "png", "jpeg", "gif"])
    {
        $validators = [
            "jpg" => fn($base64) => strpos($base64, 'data:image/jpg;base64') === 0,
            "jpeg" => fn($base64) => strpos($base64, 'data:image/jpeg;base64') === 0,
            "png" => fn($base64) => strpos($base64, 'data:image/png;base64') === 0,
            "gif" => fn($base64) => strpos($base64, 'data:image/gif;base64') === 0,
            "py" => fn($base64) => strpos($base64, 'data:text/x-python;base64') === 0,
            "webp" => fn($base64) => strpos($base64, 'data:image/webp;base64') === 0,
        ];
        foreach ($validatedTypes as $validatedType) {
            if ($validators[$validatedType]($base64)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Enregistre une image
     * @param 	string	$base64				Le base64
     * @param 	string	$savePath			Le chemin d'enregistrement
     * @param 	array	$validatedTypes		Les types du fichier validés
     *
     */
    public function saveImageFromBase64($base64, $savePath, $validatedTypes = ["jpg", "png", "jpeg", "gif"], $storage_path = "./")
    {
        try {
            $imageData = $base64;
            foreach ($validatedTypes as $extention) {
                $imageData = str_replace("data:image/$extention;base64,", '', $imageData);
            }
            $imageData = str_replace(' ', '+', $imageData);
            $imageData = base64_decode($imageData);
            Storage::disk("public")->put($savePath, $imageData);
            return $savePath;
        } catch (Exception $ex) {
            return false;
        }
    }

    /**
     * Enregistre un fichier
     * @param 	string	$base64				Le base64
     * @param 	string	$savePath			Le chemin d'enregistrement
     *
     */
    public function saveScriptFromBase64($base64, $savePath)
    {
        try {
            $imageData = str_replace("data:text/x-python;base64,", '', $base64);
            $imageData = str_replace(' ', '+', $imageData);
            $imageData = base64_decode($imageData);
            Storage::disk("public")->put($savePath, $imageData);
            return $savePath;
        } catch (Exception $ex) {
            return false;
        }
    }

    function getMimeTypeFromBase64($base64String)
    {
        if (preg_match('/^data:(.*);base64,/', $base64String, $matches)) {
            return $matches[1]; // Retourne le type MIME
        }
        return null;
    }

    function getExtensionFromMimeType($mimeType)
    {
        $mimeMap = [
            'image/jpeg' => 'jpg',
            'image/png' => 'png',
            'image/gif' => 'gif',
            'application/pdf' => 'pdf',
            'application/msword' => 'doc',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
            'text/plain' => 'txt',
            'text/csv' => 'csv',
        ];

        return $mimeMap[$mimeType] ?? null;
    }

    function saveBase64File($base64String, $path = 'uploads')
    {
        if (!str_starts_with($base64String, 'data:')) {
            return null;
        }

        [$meta, $data] = explode(',', $base64String, 2);

        if (preg_match('/^data:(.*);base64$/', $meta, $matches)) {
            $mimeType = $matches[1];
            $decodedData = base64_decode($data);

            if ($decodedData === false) {
                return null;
            }

            $extension = $this->getExtensionFromMimeType($mimeType);

            if (!$extension) {
                return null;
            }

            $fileName = uniqid() . '.' . $extension;
            Storage::disk("public")->put("$path/$fileName", $decodedData);

            return "$path/$fileName";
        }

        return null;
    }

    /**
     * Permet d'ajouter des filtres avec des valeurs multiples sur un objet Eloquent
     * @param 	mixed 	$query					L'objet Eloquent
     * @param 	mixed 	$requestData			Les données de la requete
     * @param 	mixed 	$correlationDataList	Les valeurs à utiliser pour appliquer les filtres
     * @return 	mixed
     */
    public function queryMultipeValvueFilter($query, $requestData, $correlationDataList, $prefix = "multi_")
    {
        foreach ($correlationDataList as $dbFilter => $correlationData) {
            $multiName = $prefix . $dbFilter;
            if (isset($requestData[$multiName]) && $requestData[$multiName]) {
                $query->where(function ($query) use ($dbFilter, $multiName, $requestData, $correlationData) {
                    foreach (explode("-", $requestData[$multiName]) as $char) {
                        if (array_key_exists($char, $correlationData)) {
                            $query->orWhere($dbFilter, $correlationData[$char]);
                        }
                    }
                });
            }
        }
        return $query;
    }

    public static function getAccessToken()
    {
        try {
            $client = new Client();
            $client->setAuthConfig(env('FIREBASE_CREDENTIALS_PATH'));
            $client->addScope('https://www.googleapis.com/auth/firebase.messaging');
            $client->useApplicationDefaultCredentials();
            $token = $client->fetchAccessTokenWithAssertion();

            if (!isset($token['access_token'])) {
                throw new Exception("Échec de l'obtention du token d'accès Firebase.");
            }

            return $token['access_token'];
        } catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], 500);
        }
    }

    public static function sendNotif($token, $message)
    {
        $url = env('FIREBASE_NOTIFICATION_URL');
        $fields = [
            'message' => [
                'token' => $token,
                'notification' => [
                    'title' => $message['title'] ?? 'Notification',
                    'body' => $message['message'],
                ],
                'data' => $message
            ]
        ];

        $accessToken = self::getAccessToken();
        if (is_array($accessToken) && isset($accessToken['error'])) {
            return $accessToken;
        }

        $headers = [
            'Authorization: Bearer ' . $accessToken,
            'Content-Type: application/json'
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

        $result = curl_exec($ch);
        if ($result === FALSE) {
            $error = curl_error($ch);
            curl_close($ch);
            return response()->json(["error" => "Curl failed: " . $error], 500);
        }

        curl_close($ch);

        return json_decode($result, true);
    }
}