<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 10:21
 */

namespace App\Checko\CheckItemComment\Providers\Frontend;

use Illuminate\Auth\Access\Gate;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class CheckItemCommentProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\CheckItemComment\Http\Controllers\Frontend';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->frontendRoutes();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function frontendRoutes()
    {
        Route::namespace($this->namespace)
            ->group(base_path('app/Checko/CheckItemComment/Routes/Frontend/index.php'));
    }
}

