<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.07.19
 * Time: 14:02
 */

namespace App\Checko\Offers\Providers;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class OfferProvider extends ServiceProvider
{
    protected $namespace = 'App\Checko\Offers\Http\Controller\Frontend';

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->frontend();
    }

    /**
     * Define the "web" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function frontend()
    {
        Route::middleware(['web'])
            ->namespace($this->namespace)
            ->group(base_path('app/Checko/Offers/Routes/Frontend/routes.php'));
    }
}