<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 25.06.19
 * Time: 14:38
 */

namespace App\Checko\DefaultPages\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class DefaultPageProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\DefaultPages\Http\Controllers\AdminPanel';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->adminPanelRoutes();
        $this->Frontend();
    }
    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function adminPanelRoutes()
    {
        Route::middleware(['web', 'auth', 'admin_pass'])
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/DefaultPages/Routes/adminPanel.php'));
    }

    protected function Frontend()
    {
        Route::middleware('web')
            ->namespace('App\Checko\DefaultPages\Http\Controllers\Frontend')
            ->group(base_path('app/Checko/DefaultPages/Routes/frontend.php'));
    }
}