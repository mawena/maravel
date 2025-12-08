<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GenerateDocumentsRequest;
use PhpOffice\PhpSpreadsheet\IOFactory as SpreadsheetIOFactory;
use PhpOffice\PhpWord\TemplateProcessor;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class DocumentGeneratorController extends Controller
{
	/**
	 * Génère des documents Word à partir d'un template et de données Excel
	 * 
	 * @param GenerateDocumentsRequest $request
	 * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
	 */
	public function generate(GenerateDocumentsRequest $request)
	{
		try {
			$excelFile = $request->file('excel_file');
			$templateFile = $request->file('template_file');

			// Lire le fichier Excel
			$spreadsheet = SpreadsheetIOFactory::load($excelFile->getRealPath());
			$worksheet = $spreadsheet->getActiveSheet();
			$rows = $worksheet->toArray();

			// Vérifier qu'il y a des données
			if (count($rows) < 2) {
				return response()->json([
					'success' => false,
					'message' => 'Le fichier Excel doit contenir au moins une ligne d\'en-tête et une ligne de données'
				], 400);
			}

			// La première ligne contient les en-têtes (variables)
			$headers = array_map(function ($header) {
				return trim($header);
			}, $rows[0]);

			// Créer un dossier temporaire pour les documents générés
			$timestamp = now()->format('Y-m-d_H-i-s');
			$outputDir = storage_path("app/generated_documents_{$timestamp}");

			if (!file_exists($outputDir)) {
				mkdir($outputDir, 0777, true);
			}

			$generatedFiles = [];

			// Debug: Afficher le nombre de lignes
			\Log::info('Nombre total de lignes dans le fichier Excel', [
				'total_rows' => count($rows),
				'data_rows' => count($rows) - 1,
			]);

			// Parcourir chaque ligne de données (à partir de la ligne 2)
			for ($i = 1; $i < count($rows); $i++) {
				$rowData = $rows[$i];

				\Log::info("Traitement de la ligne $i", ['data' => $rowData]);

				// Créer un tableau associatif avec les en-têtes et les valeurs
				$data = [];
				foreach ($headers as $index => $header) {
					if (!empty($header)) {
						$data[$header] = $rowData[$index] ?? '';
					}
				}

				// Créer une copie du template pour cette ligne
				$templateProcessor = new TemplateProcessor($templateFile->getRealPath());

				// Ajouter les variables de date et heure supplémentaires
				$dateVariables = $this->getDateVariables();

				// Remplacer les variables dans le template
				// Les variables dans le template Word doivent être au format ${nom_variable}
				foreach ($data as $key => $value) {
					// Formater les nombres pour un affichage plus lisible
					$formattedValue = $this->formatNumber($value);
					$templateProcessor->setValue($key, $formattedValue);
				}

				// Remplacer les variables de date et heure
				foreach ($dateVariables as $key => $value) {
					$templateProcessor->setValue($key, $value);
				}

				// Générer le nom du fichier de sortie
				// Utiliser le nom du template Word comme préfixe
				$templateName = pathinfo($templateFile->getClientOriginalName(), PATHINFO_FILENAME);
				$templateName = $this->sanitizeFileName($templateName);

				$fileName = !empty($data[$headers[0]])
					? $templateName . "_" . $this->sanitizeFileName($data[$headers[0]]) . ".docx"
					: $templateName . "_ligne_{$i}.docx";

				$outputPath = $outputDir . '/' . $fileName;
				$templateProcessor->saveAs($outputPath);

				$generatedFiles[] = [
					'filename' => $fileName,
					'path' => $outputPath
				];

				\Log::info("Document créé", [
					'filename' => $fileName,
					'path' => $outputPath,
					'exists' => file_exists($outputPath),
				]);
			}

			// Debug: Afficher le nombre de documents générés
			\Log::info('Documents générés', [
				'count' => count($generatedFiles),
				'files' => array_column($generatedFiles, 'filename'),
			]);

			// Créer un fichier ZIP contenant tous les documents générés
			$zipFileName = "documents_generes_{$timestamp}.zip";
			$zipPath = storage_path("app/{$zipFileName}");

			$zip = new ZipArchive();
			if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
				throw new \Exception('Impossible de créer le fichier ZIP');
			}

			foreach ($generatedFiles as $file) {
				$added = $zip->addFile($file['path'], $file['filename']);
				\Log::info("Ajout au ZIP", [
					'filename' => $file['filename'],
					'path' => $file['path'],
					'added' => $added,
					'file_exists' => file_exists($file['path']),
				]);
			}

			$zip->close();

			\Log::info('ZIP créé', [
				'zip_path' => $zipPath,
				'zip_exists' => file_exists($zipPath),
				'zip_size' => file_exists($zipPath) ? filesize($zipPath) : 0,
				'num_files_in_zip' => $zip->numFiles,
			]);

			// Supprimer les fichiers individuels après la création du ZIP
			foreach ($generatedFiles as $file) {
				if (file_exists($file['path'])) {
					unlink($file['path']);
				}
			}

			// Supprimer le dossier temporaire
			if (file_exists($outputDir)) {
				rmdir($outputDir);
			}

			// Retourner le fichier ZIP en téléchargement
			return response()->download($zipPath, $zipFileName)->deleteFileAfterSend(true);

		} catch (\Exception $e) {
			return response()->json([
				'success' => false,
				'message' => 'Erreur lors de la génération des documents',
				'error' => $e->getMessage()
			], 500);
		}
	}

	/**
	 * Génère les variables de date et heure pour le remplacement dans les templates
	 * 
	 * @return array
	 */
	private function getDateVariables()
	{
		$now = now();

		// Noms des jours en français
		$daysOfWeek = [
			1 => 'lundi',
			2 => 'mardi',
			3 => 'mercredi',
			4 => 'jeudi',
			5 => 'vendredi',
			6 => 'samedi',
			7 => 'dimanche'
		];

		// Noms des mois en français
		$months = [
			1 => 'janvier',
			2 => 'février',
			3 => 'mars',
			4 => 'avril',
			5 => 'mai',
			6 => 'juin',
			7 => 'juillet',
			8 => 'août',
			9 => 'septembre',
			10 => 'octobre',
			11 => 'novembre',
			12 => 'décembre'
		];

		$dayOfWeek = $now->dayOfWeekIso; // 1 = lundi, 7 = dimanche
		$month = $now->month;
		$day = $now->day;
		$year = $now->year;

		return [
			'day' => $day,
			'month' => $month,
			'year' => $year,
			'hour' => $now->hour,
			'minute' => $now->minute,
			'second' => $now->second,
			'day_of_week' => $dayOfWeek,
			'day_of_year' => $now->dayOfYear,
			'week_of_year' => $now->weekOfYear,
			'day_of_week_fr' => $daysOfWeek[$dayOfWeek],
			'month_fr' => $months[$month],
			'year_fr' => $year,
			'day_fr' => "Lomé, le {$day} " . ucfirst($months[$month]) . " {$year}"
		];
	}

	/**
	 * Formate un nombre pour un affichage plus lisible avec des espaces comme séparateurs de milliers
	 * 
	 * @param mixed $value
	 * @return string
	 */
	private function formatNumber($value)
	{
		// Si la valeur est vide ou nulle, la retourner telle quelle
		if (empty($value) || $value === null) {
			return $value;
		}

		// Convertir en string pour traitement
		$stringValue = (string) $value;

		// Vérifier si c'est un nombre (entier ou décimal)
		if (is_numeric($stringValue)) {
			// Convertir en float et limiter à 2 décimales maximum
			$numericValue = (float) $stringValue;

			// Utiliser number_format avec 2 décimales maximum et espaces comme séparateurs
			$formatted = number_format($numericValue, 2, '.', ' ');

			// Supprimer les zéros inutiles à la fin des décimales
			$formatted = rtrim($formatted, '0');
			$formatted = rtrim($formatted, '.');

			return $formatted;
		}

		// Si ce n'est pas un nombre, retourner la valeur originale
		return $value;
	}

	/**
	 * Nettoie un nom de fichier pour le rendre sûr
	 * 
	 * @param string $fileName
	 * @return string
	 */
	private function sanitizeFileName($fileName)
	{
		// Remplacer les caractères spéciaux
		$fileName = preg_replace('/[^A-Za-z0-9_\-]/', '_', $fileName);
		// Limiter la longueur
		$fileName = substr($fileName, 0, 50);

		return $fileName;
	}

	/**
	 * Affiche la liste des variables disponibles dans un template
	 * 
	 * @param Request $request
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function getTemplateVariables(Request $request)
	{
		$request->validate([
			'template_file' => 'required|file|mimes:docx',
		]);

		try {
			$templateFile = $request->file('template_file');
			$templateProcessor = new TemplateProcessor($templateFile->getRealPath());
			$variables = $templateProcessor->getVariables();

			return response()->json([
				'success' => true,
				'variables' => $variables,
				'message' => 'Variables trouvées dans le template'
			]);

		} catch (\Exception $e) {
			return response()->json([
				'success' => false,
				'message' => 'Erreur lors de la lecture du template',
				'error' => $e->getMessage()
			], 500);
		}
	}
}
