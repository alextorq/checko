<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 27.05.19
 * Time: 15:16
 */

namespace App\Checko\CheckList\Providers\AdminPanel;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class CheckListProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\CheckList\Http\Controllers\AdminPanel';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->CheckListAdminRoutes();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function CheckListAdminRoutes()
    {
        Route::middleware(['web', 'auth', 'admin_pass'])
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/CheckList/Routes/adminPanel.php'));
    }
}