<?php

namespace Maravel\Providers;

use Illuminate\Support\ServiceProvider;
use Maravel\Http\Controllers\APIController;
use Maravel\Http\Middleware\FieldFilterMiddleware;
use Maravel\Console\Commands\MakeController;
use Maravel\Console\Commands\MakeModel;
use Maravel\Console\Commands\MakePolicy;
use Maravel\Console\Commands\MakePermission;
use Maravel\Console\Commands\InstallCommand;

class AdvancedApiControllerServiceProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		// Enregistrement des services si nécessaire
	}

	/**
	 * Bootstrap services.
	 */
	public function boot(): void
	{
		// Enregistrement de l'alias du middleware de filtrage de champs
		$this->app['router']->aliasMiddleware('maravel.fields', FieldFilterMiddleware::class);

		// Publication des fichiers de configuration
		if ($this->app->runningInConsole()) {
			$this->publishes([
				__DIR__ . '/../../config/advanced-api-controller.php' => config_path('advanced-api-controller.php'),
			], 'advanced-api-controller-config');

			// Enregistrement des commandes personnalisées
			$this->commands([
				InstallCommand::class,
				MakeController::class,
				MakeModel::class,
				MakePolicy::class,
				MakePermission::class,
			]);
		}
	}
}




