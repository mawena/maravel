<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GenerateDocumentsRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true; // Autoriser toutes les requêtes (ajuster selon vos besoins)
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		return [
			'excel_file' => [
				'required',
				'file',
				'mimes:xlsx,xls,csv',
				'max:10240', // 10MB maximum
			],
			'template_file' => [
				'required',
				'file',
				'mimes:docx',
				'max:10240', // 10MB maximum
			],
		];
	}

	/**
	 * Get custom error messages for validation rules.
	 *
	 * @return array<string, string>
	 */
	public function messages(): array
	{
		return [
			'excel_file.required' => 'Le fichier Excel est requis.',
			'excel_file.file' => 'Le fichier Excel doit être un fichier valide.',
			'excel_file.mimes' => 'Le fichier Excel doit être au format xlsx, xls ou csv.',
			'excel_file.max' => 'Le fichier Excel ne doit pas dépasser 10 Mo.',
			'template_file.required' => 'Le fichier template Word est requis.',
			'template_file.file' => 'Le fichier template doit être un fichier valide.',
			'template_file.mimes' => 'Le fichier template doit être au format docx.',
			'template_file.max' => 'Le fichier template ne doit pas dépasser 10 Mo.',
		];
	}
}
