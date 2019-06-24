<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.06.19
 * Time: 11:19
 */

namespace App\Checko\Services\Errors\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

use Illuminate\Support\Facades\Route;

class ErrorProvider extends ServiceProvider
{

    protected $namespace = 'App\Checko\Services\Errors\Http\Controllers\Frontend';
    protected $namespaceAdmin = 'App\Checko\Services\Errors\Http\Controllers\AdminPanel';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->frontendRoutes();
        $this->adminRoutes();
    }


    protected function adminRoutes()
    {
        Route::middleware(['web', 'auth', 'admin_pass'])
            ->namespace($this->namespaceAdmin)
            ->group(base_path('app/Checko/Services/Errors/Routes/admin_panel.php'));
    }


    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function frontendRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/Services/Errors/Routes/frontend.php'));
    }

}