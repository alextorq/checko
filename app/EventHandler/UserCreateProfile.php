<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 22.04.19
 * Time: 12:27
 */

namespace App\EventHandler;

use Illuminate\Auth\Events\Registered;


class UserCreateProfile
{
    /**
     * Handle the event.
     *
     * @param  \Illuminate\Auth\Events\Registered  $event
     * @return void
     */
    public function handle(Registered $event)
    {
        $user = $event->user;
        $userId = $user->getKey();

        $user->profile()->create(array('user_id' => $userId));
    }
}