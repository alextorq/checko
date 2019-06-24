<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:59
 */

namespace App\Checko\CheckList\Providers\Frontend;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class CheckListProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\CheckList\Http\Controllers\Frontend';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->CheckListFrontendRoutes();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function CheckListFrontendRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/CheckList/Routes/frontend.php'));
    }
}