<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 13:30
 */

namespace App\Checko\CheckItemComment\Providers\Frontend;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class CheckItemCommentPermission extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('deleteComment', function ($user, $comment) {
            return  $user->user_id === $comment->user_id || $user->user_id === $comment->checkListOwner->getKey();
        });

        Gate::define('edit', function ($user, $comment) {
            return $user->user_id === $comment->user_id;
        });

    }
}