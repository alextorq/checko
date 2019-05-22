<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Checko\Models\CheckItem;
use App\Observers\CheckItemObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        CheckItem::observe(CheckItemObserver::class);
    }
}
