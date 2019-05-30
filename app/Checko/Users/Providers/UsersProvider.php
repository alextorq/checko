<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 29.01.19
 * Time: 11:11
 */

namespace App\Checko\Users\Providers;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class UsersProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\Users\Http\Controllers\AdminPanel';

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
            ->group(base_path('app/Checko/Users/routes/adminPanel.php'));
    }

    protected function Frontend()
    {
        Route::middleware(['web', 'auth'])
            ->namespace('App\Checko\Users\Http\Controllers\Frontend')
            ->group(base_path('app/Checko/Users/routes/frontend.php'));
    }
}