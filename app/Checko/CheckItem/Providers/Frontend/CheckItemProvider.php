<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:47
 */

namespace App\Checko\CheckItem\Providers\Frontend;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class CheckItemProvider extends  ServiceProvider
{
    protected $namespace = 'App\Checko\CheckItem\Http\Controllers\Frontend';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->CheckItemFrontendRoutes();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function CheckItemFrontendRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/CheckItem/Routes/frontend.php'));
    }
}