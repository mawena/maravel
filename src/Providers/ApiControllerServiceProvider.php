<?php

namespace LaravelAdvancedApiController\Providers;

use Illuminate\Support\ServiceProvider;
use LaravelAdvancedApiController\Http\Controllers\APIController;
use LaravelAdvancedApiController\Console\Commands\MakeAdvancedPolicy;

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
		// Publication des fichiers de configuration
		if ($this->app->runningInConsole()) {
			$this->publishes([
				__DIR__ . '/../../config/advanced-api-controller.php' => config_path('advanced-api-controller.php'),
			], 'advanced-api-controller-config');

			// Enregistrement des commandes personnalisées
			$this->commands([
				MakeAdvancedPolicy::class,
			]);
		}
	}
}
