<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 07.02.19
 * Time: 15:31
 */

namespace App\Checko\Permissions\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class PermissionsProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Checko\Permissions\Http\Controllers\AdminPanel';

    /**
     * Define your route model bindings, pattern filters, etc.
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    /**
     * Define the routes for the application.
     * @return void
     */
    public function map()
    {
        $this->mapRolesRoutes();
        $this->mapAbilitiesRoutes();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function mapAbilitiesRoutes()
    {
        Route::middleware(['web', 'auth', 'admin_pass'])
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/Permissions/routes/AbilitiesRoute.php'));
    }


    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function mapRolesRoutes()
    {
        Route::middleware(['web', 'auth', 'admin_pass'])
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/Permissions/routes/RolesRoute.php'));
    }

}