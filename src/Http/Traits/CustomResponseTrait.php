<?php

namespace LaravelAdvancedApiController\Http\Traits;

use Illuminate\Support\Facades\Response as FunctionType;
use Illuminate\Support\Facades\Schema;
use PHPUnit\Framework\Constraint\IsEmpty;

trait CustomResponseTrait
{
	use ControllerHelperTrait;

	private function utf8ize($mixed)
	{
		if (is_array($mixed)) {
			foreach ($mixed as $key => $value) {
				$mixed[$key] = $this->utf8ize($value);
			}
		} elseif (is_string($mixed)) {
			return mb_convert_encoding($mixed, 'UTF-8', 'UTF-8');
		}
		return $mixed;
	}

	/**
	 * Formate le retour de façon générique pour les fonction index
	 * @param	mixed	$query				L'objet Eloquent
	 * @param	array	$requestData		Les données de la requête
	 * @param	string	$modelName			Le nom du model utilisé
	 * @param	mixed	$status				Le statut applicatifs
	 * @param	array	$messages			Les messages applicatif
	 * @return	\Illuminate\Http\JsonResponse
	 */
	public function responseIndexOk($query, array $requestData, string $modelName, $status = 200, array $messages = [])
	{
		$modelPath = "\\App\\Models\\$modelName";
		$orderColumnArray = ["asc" => [], "desc" => []];
		if (isset($requestData["order_by_desc"]) && $requestData["order_by_desc"]) {
			$orderColumnArray["desc"] = explode('-', $requestData["order_by_desc"]);
		}
		if (isset($requestData["order_by_asc"]) && $requestData["order_by_asc"]) {
			$orderColumnArray["asc"] = explode('-', $requestData["order_by_asc"]);
		}
		$orderColumnArray["desc"] = (empty($orderColumnArray["desc"]) && empty($orderColumnArray["asc"])) ? ["updated_at"] : $orderColumnArray['desc'];

		foreach ($orderColumnArray["desc"] as $orderDescColumn) {
			if (in_array($orderDescColumn, Schema::getColumnListing((new $modelPath)->getTable()))) {
				$query = $query->orderBy($orderDescColumn, "desc");
			}
		}
		foreach ($orderColumnArray["asc"] as $orderAscColumn) {
			if (in_array($orderAscColumn, Schema::getColumnListing((new $modelPath)->getTable()))) {
				$query = $query->orderBy($orderAscColumn, "asc");
			}
		}

		$perPage = isset($requestData["per_page"]) ? (int) $requestData["per_page"] : 8;
		if (isset($requestData["paginate"]) && $requestData["paginate"] == "false") {
			$data = $query->get();
			$data = $this->callFunctionOnModelCollection($data, $requestData);
			$data = ["data" => $data->toArray(), "total" => count($data)];
		} else {
			$data = $query->paginate($perPage);
			$data->getCollection()->transform(function ($item) use ($requestData) {
				return $this->callFunctionOnModelCollection([$item], $requestData)[0];
			});
			$data = $data->toArray();
		}
		return $this->responseOkPaginate(data: $data, status: $status, messages: $messages);
	}

	/**
	 * Formate le retour pour le success
	 * @param	mixed	$data		Les données à envoyer
	 * @param	mixed	$messages	Les messages applicatifs
	 * @param	mixed	$status		Le statut applicatif
	 * @return	\Illuminate\Http\JsonResponse
	 */
	public function responseOk($data = [], $messages = [], $status = 200)
	{
		return FunctionType::json(
			[
				"status" => $status,
				"data" => $this->utf8ize($data),
				"messages" => $messages,
			],
		);
	}

	/**
	 * Formate le retour pour le success avec pagination
	 * @param	mixed	$data		Les données à envoyer
	 * @param	mixed	$messages	Les messages applicatifs
	 * @param	mixed	$status		Le statut applicatif
	 * @return	\Illuminate\Http\JsonResponse
	 */
	public function responseOkPaginate($data = [], $messages = [], $status = 200)
	{
		return FunctionType::json(
			array_merge(["status" => $status, "messages" => $messages], $this->utf8ize($data)),
		);
	}

	/**
	 * Formate le retour pour les erreurs
	 * @param	mixed	$errors		Les erreurs applicatives
	 * @param	integer	$status		Le statut HTTP
	 * @return	\Illuminate\Http\JsonResponse
	 */
	public function responseError($errors, int $status = 400)
	{
		$finalErrors = [];
		foreach ($errors as $key => $value) {
			$finalErrors[$key] = implode("<br>", $value);
		}
		return FunctionType::json(
			[
				"status" => $status,
				"errors" => $finalErrors,
			],
			200,
		);
	}
}
