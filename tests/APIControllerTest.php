<?php

namespace LaravelApiController\Tests;

use Orchestra\Testbench\TestCase;
use LaravelApiController\Http\Controllers\APIController;
use LaravelApiController\Http\Traits\CustomResponseTrait;
use LaravelApiController\Http\Traits\ControllerHelperTrait;
use LaravelApiController\Http\Traits\ScriptGeneratorTrait;

class APIControllerTest extends TestCase
{
	/**
	 * Test de base pour vérifier que la librairie fonctionne
	 */
	public function test_library_can_be_loaded()
	{
		$this->assertTrue(class_exists(APIController::class));
		$this->assertTrue(trait_exists(CustomResponseTrait::class));
		$this->assertTrue(trait_exists(ControllerHelperTrait::class));
		$this->assertTrue(trait_exists(ScriptGeneratorTrait::class));
	}

	/**
	 * Test des traits
	 */
	public function test_traits_are_available()
	{
		$controller = new class extends APIController {
			protected string $modelClass = 'TestModel';
		};

		$this->assertTrue(method_exists($controller, 'responseOk'));
		$this->assertTrue(method_exists($controller, 'responseError'));
		$this->assertTrue(method_exists($controller, 'queryFilter'));
		$this->assertTrue(method_exists($controller, 'querySearch'));
	}

	/**
	 * Test de la configuration
	 */
	public function test_configuration_is_loaded()
	{
		$config = $this->app['config']->get('api-controller');

		$this->assertNotNull($config);
		$this->assertArrayHasKey('defaults', $config);
		$this->assertArrayHasKey('responses', $config);
		$this->assertArrayHasKey('filters', $config);
	}

	protected function getPackageProviders($app)
	{
		return [
			\LaravelApiController\Providers\ApiControllerServiceProvider::class,
		];
	}

	protected function getEnvironmentSetUp($app)
	{
		// Configuration de base pour les tests
		$app['config']->set('database.default', 'testing');
		$app['config']->set('database.connections.testing', [
			'driver' => 'sqlite',
			'database' => ':memory:',
			'prefix' => '',
		]);
	}
}
