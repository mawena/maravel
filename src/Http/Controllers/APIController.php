<?php

namespace LaravelAdvancedApiController\Http\Controllers;

use LaravelAdvancedApiController\Http\Traits\ControllerHelperTrait;
use LaravelAdvancedApiController\Http\Traits\CustomResponseTrait;
use LaravelAdvancedApiController\Http\Traits\ScriptGeneratorTrait;
use LaravelAdvancedApiController\Http\Traits\PermissionCheckerTrait;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class APIController extends BaseController
{
	use AuthorizesRequests, ValidatesRequests, CustomResponseTrait, ControllerHelperTrait, ScriptGeneratorTrait, PermissionCheckerTrait;

	/** 
	 * Nom simple du modèle, ex : "User" 
	 */
	protected string $modelName;

	/** 
	 * Nom complet (FQCN) de la classe du modèle, ex : "App\Models\User" 
	 */
	protected string $modelClass = "";

	/** 
	 * Nom de la capacité Gate pour la méthode index() (par défaut "viewAny") 
	 */
	protected string|null $indexAbilityName = "viewAny";

	/** 
	 * Nom de la capacité Gate pour la méthode show() (par défaut "viewAny") 
	 */
	protected string|null $showAbilityName = "viewAny";

	/** 
	 * Liste des champs pour la recherche textuelle dans index() 
	 */
	protected array $indexSearchFieldList = [];

	/** 
	 * Nom de la capacité Gate pour la méthode store() (par défaut "create") 
	 */
	protected string|null $storeAuthName = "create";

	/** 
	 * Règles de validation Laravel pour la création 
	 */
	protected array $storeValidationArray = [];

	/** 
	 * Messages d'erreurs personnalisés pour les validations en création 
	 */
	protected array $storeValidationTextArray = [];

	/** 
	 * Relations Eloquent à charger et retourner après création 
	 */
	protected array $storeRelationArray = [];

	/** 
	 * Nom de la capacité Gate pour la méthode update() (par défaut "update") 
	 */
	protected string|null $updateAuthName = "update";

	/** 
	 * Messages d'erreurs personnalisés pour les validations en update 
	 */
	protected array $updateValidationTextArray = [];

	/** 
	 * Relations Eloquent à charger et retourner après mise à jour 
	 */
	protected array $updateRelationArray = [];

	/** 
	 * Nom de la capacité Gate pour la méthode destroy() (par défaut "delete") 
	 */
	protected string|null $destroyAuthName = "delete";

	/** 
	 * Fonction de filtrage personnalisée pour index()
	 * Signature : function(\Illuminate\Database\Eloquent\Builder $query, \App\Models\User $user, array $requestData): Builder
	 */
	protected $indexManualFilter = null;

	/** 
	 * Fonction de validations manuelles pour store()
	 * Signature : function(array $requestData): array|null
	 */
	protected $storeManualValidationsFunction = null;

	/** 
	 * Fonction exécutée avant la création
	 * Signature : function(array $requestData, array $manualValidationsReturnData): array
	 */
	protected $storeBeforeCreateFunction = null;

	/** 
	 * Fonction exécutée après la création
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $storeAfterCreateFunction = null;

	/** 
	 * Fonction exécutée avant le commit en création
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $storeBeforeCommitFunction = null;

	/** 
	 * Fonction exécutée après le commit en création
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $storeAfterCommitFunction = null;

	/** 
	 * Fonction qui retourne les règles de validation pour update()
	 * Signature : function(int $id): array
	 */
	protected $updateGetValidationArrayFunction = [];

	/** 
	 * Fonction de validations manuelles pour update()
	 * Signature : function(array $requestData, \Illuminate\Database\Eloquent\Model $model): array|null
	 */
	protected $updateManualValidationsFunction = null;

	/** 
	 * Fonction exécutée avant la mise à jour
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): array
	 */
	protected $updateBeforeUpdateFunction = null;

	/** 
	 * Fonction exécutée après la mise à jour
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $updateAfterUpdateFunction = null;

	/** 
	 * Fonction exécutée avant le commit en update
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $updateBeforeCommitFunction = null;

	/** 
	 * Fonction exécutée après le commit en update
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model, array $requestData, array $manualValidationsReturnData): \Illuminate\Database\Eloquent\Model
	 */
	protected $updateAfterCommitFunction = null;

	/** 
	 * Fonction exécutée avant la suppression
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model): void
	 */
	protected $deleteBeforeDeleteFunction = null;

	/** 
	 * Fonction exécutée après la suppression
	 * Signature : function(\Illuminate\Database\Eloquent\Model $model): \Illuminate\Database\Eloquent\Model
	 */
	protected $deleteAfterDeleteFunction = null;

	public function __construct()
	{
		$elements = explode('\\', $this->modelClass);
		$this->modelName = end($elements);
	}

	public function index(Request $request)
	{
		if ($this->indexAbilityName) {
			if (!($authorisation = Gate::inspect($this->indexAbilityName, $this->modelClass))->allowed()) {
				return $this->responseError(["auth" => [$authorisation->message()]], 403);
			}
		}
		$list = call_user_func([$this->modelClass, 'query']);

		$requestData = $request->all();
		($search = $request->search) ? $list = $this->querySearch($list, $this->indexSearchFieldList, $search) : null;
		($distinct = $request->distinct) ? $list = $this->queryDistinct($list, $distinct) : null;

		$list = $this->queryFilter($list, $requestData, $this->modelName);
		$list = $this->queryFilterIn($list, $requestData, $this->modelName);
		$list = $this->queryFilterNotIn($list, $requestData, $this->modelName);
		$list = $this->queryFilterMin($list, $requestData, $this->modelName);
		$list = $this->queryFilterMax($list, $requestData, $this->modelName);
		$list = $this->queryRelationAdd($list, $requestData, $this->modelName);

		$connectedUser = $request->user();
		if ($this->indexManualFilter) {
			$list = ($this->indexManualFilter)($list, $connectedUser, $requestData);
		}

		return $this->responseIndexOk($list, $requestData, $this->modelName);
	}

	public function show(Request $request, int $id)
	{
		$model = call_user_func_array([$this->modelClass, 'find'], [$id]);
		$requestData = $request->all();
		if ($model) {
			if ($this->showAbilityName) {
				if (!($authorisation = Gate::inspect($this->showAbilityName, $model))->allowed()) {
					return $this->responseError(["auth" => [$authorisation->message()]], 403);
				}
			}
			$model = $this->modelRelationLoad($model, $requestData, $this->modelName);
			$model = $this->callFunctionOnModelCollection([$model], $requestData)[0];
			return $this->responseOk([$this->modelName => $model]);
		} else {
			return $this->responseError(["id" => ["l'élément n'existe pas"]], 404);
		}
	}

	public function store(Request $request)
	{
		return $this->modelStore(
			modelClass: $this->modelClass,
			requestData: $request->all(),
			validations: $this->storeValidationArray,
			validationsText: $this->storeValidationTextArray,
			manualValidations: $this->storeManualValidationsFunction,
			beforeCreate: $this->storeBeforeCreateFunction,
			afterCreate: $this->storeAfterCreateFunction,
			beforeCommit: $this->storeBeforeCommitFunction,
			afterCommit: $this->storeAfterCommitFunction,
			authName: $this->storeAuthName,
			relations: $this->storeRelationArray,
		);
	}

	public function store_multiple(Request $request)
	{
		return $this->modelStoreMulty(
			modelClass: $this->modelClass,
			requestDataArray: $request->all(),
			validations: $this->storeValidationArray,
			validationsText: $this->storeValidationTextArray,
			manualValidations: $this->storeManualValidationsFunction,
			beforeCreate: $this->storeBeforeCreateFunction,
			afterCreate: $this->storeAfterCreateFunction,
			beforeCommit: $this->storeBeforeCommitFunction,
			afterCommit: $this->storeAfterCommitFunction,
			authName: $this->storeAuthName,
			relations: $this->storeRelationArray,
		);
	}

	public function update(Request $request, int $id)
	{
		return $this->modelUpdate(
			modelId: $id,
			modelClass: $this->modelClass,
			requestData: $request->all(),
			validations: ($this->updateGetValidationArrayFunction)($id),
			validationsText: $this->updateValidationTextArray,
			manualValidations: $this->updateManualValidationsFunction,
			beforeUpdate: $this->updateBeforeUpdateFunction,
			afterUpdate: $this->updateAfterUpdateFunction,
			beforeCommit: $this->updateBeforeCommitFunction,
			afterCommit: $this->updateAfterCommitFunction,
			authName: $this->updateAuthName,
			relations: $this->updateRelationArray,
		);
	}

	public function destroy(Request $request, int $id)
	{
		return $this->modelDelete(
			modelId: $id,
			modelClass: $this->modelClass,
			authName: $this->destroyAuthName,
			beforeDelete: $this->deleteBeforeDeleteFunction,
			afterDelete: $this->deleteAfterDeleteFunction,
		);
	}

	/**
	 * Enregistrer un model
	 * @param 	mixed 		$modelClass			La classe du model
	 * @param 	array 		$requestData		Les données de la requête
	 * @param 	array 		$validations		Les données des validations à effectuer
	 * @param 	array 		$validationsText	Les textes des validations à effectuer
	 * @param 	array 		$manualValidations	Une fonction de validations manuelles
	 * @param 	callable 	$beforeCreate		Une fonction à appeler avant l'insertion, params : requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterCreate		Une fonction à appeler après l'insertion, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$beforeCommit		Une fonction à appeler avant le commit, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterCommit		Une fonction à appeler après le commit, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	string	    $authName   		Le nom de la fonction de police à utiliser
	 * @param 	array	    $relations   		Les relations à afficher lors de retour
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function modelStore($modelClass, array $requestData, array $validations = [], array $validationsText = [], callable $manualValidations = null, callable $beforeCreate = null, callable $afterCreate = null, callable $beforeCommit = null, callable $afterCommit = null, string|null $authName = "create", $relations = [])
	{
		if ($authName && !($authorisation = Gate::inspect($authName, $modelClass))->allowed()) {
			return $this->responseError(["auth" => [$authorisation->message()]], 403);
		}
		$validator = Validator::make($requestData, $validations, $validationsText);
		if ($validator->fails()) {
			return $this->responseError($validator->errors()->toArray(), 400);
		}
		DB::beginTransaction();
		$manualValidationsReturn = ($manualValidations) ? $manualValidations($requestData) : null;
		if (isset($manualValidationsReturn["errors"])) {
			if ($manualValidationsReturn["errors"]) {
				return $this->responseError($manualValidationsReturn["errors"], $manualValidationsReturn["status"] ?? 400);
			}
		}
		$manualValidationsReturn["data"] = isset($manualValidationsReturn["data"]) ? $manualValidationsReturn["data"] : [];
		$requestData = ($beforeCreate) ? $beforeCreate($requestData, $manualValidationsReturn["data"]) : $requestData;
		$model = call_user_func_array([$modelClass, 'create'], [$requestData]);
		$model = ($afterCreate) ? $afterCreate($model, $requestData, $manualValidationsReturn["data"]) : $model;
		$modelClassExployed = explode("\\", $modelClass);
		$model = ($beforeCommit) ? $beforeCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
		DB::commit();
		$model = ($afterCommit) ? $afterCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
		$model = $relations ? $this->modelRelationLoad($model, $relations, end($modelClassExployed)) : $model;
		return $this->responseOk([
			lcfirst(end($modelClassExployed)) => $model
		], status: 201);
	}

	/**
	 * Enregistrer un model
	 * @param 	mixed 		$modelClass			La classe du model
	 * @param 	array 		$requestData		Les données de la requête
	 * @param 	array 		$validations		Les données des validations à effectuer
	 * @param 	array 		$validationsText	Les textes des validations à effectuer
	 * @param 	array 		$manualValidations	Une fonction de validations manuelles
	 * @param 	callable 	$beforeCreate		Une fonction à appeler avant l'insertion, params : requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterCreate		Une fonction à appeler après l'insertion, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$beforeCommit		Une fonction à appeler avant le commit, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterCommit		Une fonction à appeler après le commit, params : model: le model fraichement crée, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	string	    $authName   		Le nom de la fonction de police à utiliser
	 * @param 	array	    $relations   		Les relations à afficher lors de retour
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function modelStoreMulty($modelClass, array $requestDataArray, array $validations = [], array $validationsText = [], callable $manualValidations = null, callable $beforeCreate = null, callable $afterCreate = null, callable $beforeCommit = null, callable $afterCommit = null, string|null $authName = "create", $relations = [])
	{
		if ($authName && !($authorisation = Gate::inspect($authName, $modelClass))->allowed()) {
			return $this->responseError(["auth" => [$authorisation->message()]], 403);
		}
		$data = [];
		DB::beginTransaction();
		foreach ($requestDataArray as $requestData) {
			$validator = Validator::make($requestData, $validations, $validationsText);
			if ($validator->fails()) {
				return $this->responseError($validator->errors()->toArray(), 400);
			}
			$manualValidationsReturn = ($manualValidations) ? $manualValidations($requestData) : null;
			if (isset($manualValidationsReturn["errors"])) {
				if ($manualValidationsReturn["errors"]) {
					return $this->responseError($manualValidationsReturn["errors"], $manualValidationsReturn["status"] ?? 400);
				}
			}
			$manualValidationsReturn["data"] = isset($manualValidationsReturn["data"]) ? $manualValidationsReturn["data"] : [];
			$requestData = ($beforeCreate) ? $beforeCreate($requestData, $manualValidationsReturn["data"]) : $requestData;
			$model = call_user_func_array([$modelClass, 'create'], [$requestData]);
			$model = ($afterCreate) ? $afterCreate($model, $requestData, $manualValidationsReturn["data"]) : $model;
			$modelClassExployed = explode("\\", $modelClass);
			$model = ($beforeCommit) ? $beforeCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
			$model = ($afterCommit) ? $afterCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
			$model = $relations ? $this->modelRelationLoad($model, $relations, end($modelClassExployed)) : $model;
			$data[] = [lcfirst(end($modelClassExployed)) => $model];
		}
		DB::commit();
		return $this->responseOk($data, status: 201);
	}

	/**
	 * Mettre à jour un model
	 * @param 	mixed 		$modelId			L'ID du model
	 * @param 	mixed 		$modelClass			La classe du model
	 * @param 	array 		$requestData		Les données de la requête
	 * @param 	array 		$validations		Les données des validations à effectuer
	 * @param 	array 		$validationsText	Les textes des validations à effectuer
	 * @param 	array 		$manualValidations	Une fonction de validations manuelles
	 * @param 	callable 	$beforeUpdate		Une fonction à appeler avant la mise à jour, params : model: le model actuel, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterUpdate		Une fonction à appeler après la mise à jour, params : model: le model fraichement mis à jour, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$beforeCommit		Une fonction à appeler avant le commit, params : model: le model fraichement mis à jour, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	callable 	$afterCommit		Une fonction à appeler après le commit, params : model: le model fraichement mis à jour, requestData: Les données de la requête, manualValidationsReturnData: les données retournées par la validation manuelle
	 * @param 	string	    $authName   		Le nom de la fonction de police à utiliser
	 * @param 	array	    $relations   		Les relations à afficher lors de retour
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function modelUpdate(mixed $modelId, $modelClass, array $requestData, array $validations = [], array $validationsText = [], callable $manualValidations = null, callable $beforeUpdate = null, callable $afterUpdate = null, callable $beforeCommit = null, callable $afterCommit = null, string|null $authName = "update", $elementName = "L'élément", $relations = [])
	{
		if ($modelId) {
			$validator = Validator::make($requestData, $validations, $validationsText);
			if ($validator->fails()) {
				return $this->responseError($validator->errors()->toArray(), 400);
			}
			$modelClassExployed = explode("\\", $modelClass);
			$model = call_user_func_array([$modelClass, 'find'], [$modelId]);
			$modelClassName = lcfirst(end($modelClassExployed));
			if ($model) {
				if ($authName && !($authorisation = Gate::inspect($authName, $model))->allowed()) {
					return $this->responseError(["auth" => [$authorisation->message()]], 403);
				}
				DB::beginTransaction();
				$manualValidationsReturn = ($manualValidations) ? $manualValidations($requestData, $model) : null;
				if (isset($manualValidationsReturn["errors"])) {
					if ($manualValidationsReturn["errors"]) {
						return $this->responseError($manualValidationsReturn["errors"], $manualValidationsReturn["status"] ?? 400);
					}
				}
				$manualValidationsReturn["data"] = isset($manualValidationsReturn["data"], $model) ? $manualValidationsReturn["data"] : [];
				$requestData = ($beforeUpdate) ? $beforeUpdate($model, $requestData, $manualValidationsReturn["data"]) : $requestData;
				$model->update($requestData);
				$model = (($afterUpdate) ? $afterUpdate($model, $requestData, $manualValidationsReturn["data"]) : $model) ?? $model;
				$model = ($beforeCommit) ? $beforeCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
				$model = $relations ? $this->modelRelationLoad($model, $relations, end($modelClassExployed)) : $model;
				DB::commit();
				$model = ($afterCommit) ? $afterCommit($model, $requestData, $manualValidationsReturn["data"]) : $model;
				return $this->responseOk([
					$modelClassName => $model
				]);
			} else {
				return $this->responseError(["id" => ["$elementName n'existe pas"]], 404);
			}
		} else {
			return $this->responseError(["id" => ["$elementName est manquant"]], 401);
		}
	}

	/**
	 * Supprimer un model
	 * @param 	mixed 		$modelId			L'ID du model
	 * @param 	mixed 		$modelClass			La classe du model
	 * @param 	array 		$manualValidations	Une fonction de validations manuelles
	 * @param 	callable 	$beforeDelete		Une fonction à appeler avant la suppression
	 * @param 	callable 	$afterDelete		Une fonction à appeler après la suppression
	 * @param 	string	    $authName   		Le nom de la fonction de police à utiliser
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function modelDelete(int $modelId, $modelClass, callable $manualValidations = null, callable $beforeDelete = null, callable $afterDelete = null, $authName = "delete", $elementName = "L'élément")
	{
		$modelClassExployed = explode("\\", $modelClass);
		$model = call_user_func_array([$modelClass, 'find'], [$modelId]);
		$modelClassName = lcfirst(end($modelClassExployed));
		if ($model) {
			if ($authName && !($authorisation = Gate::inspect($authName, $model))->allowed()) {
				return $this->responseError(["auth" => [$authorisation->message()]], 403);
			}
			$manualValidationsErrors = ($manualValidations) ? $manualValidations() : null;
			if ($manualValidationsErrors) {
				return $manualValidationsErrors;
			}
			($beforeDelete) ? $beforeDelete($model) : null;
			if ($model->delete()) {
				$model = ($afterDelete) ? $afterDelete($model) : $model;
				return $this->responseOk(messages: [$modelClassName => "$elementName a été supprimé"]);
			} else {
				return $this->responseError(["server" => ["Erreur du serveur"]], 500);
			}
		} else {
			return $this->responseError(["id" => ["$elementName n'existe pas"]], 404);
		}
	}
}
