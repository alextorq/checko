<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.04.19
 * Time: 11:11
 */

namespace App\Checko\Repository;

use App\User;
use App\UserProvider;
use Laravel\Socialite\Contracts\User as SocialiteUser;
use Illuminate\Support\Facades\Hash;

class UserAuthrepository
{
    private function generatePassword()
    {
        $chars="qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP";
        $passwordLength = 10;
        $size = StrLen($chars)-1;
        $password = '';
        while($passwordLength--){
            $password.=$chars[rand(0,$size)];
        }
        return $password;
    }

    /**
     * @param SocialiteUser $socialiteUser
     * @param string $provider
     * @return User
     */

    public function findOrCreate(SocialiteUser $socialiteUser, string $provider) : User
    {
        /** @var UserProvider $userProvider */
        $userProvider = UserProvider::byProvider(['entity' => $provider, 'id' => $socialiteUser->getId()])->first();

        if ($userProvider) {
            return $userProvider->user;
        }
        $password = $this->generatePassword();

        $user = User::create([
            'name' => $socialiteUser->getName() !== '' ? $socialiteUser->getName() : $socialiteUser->getNickname(),
            'avatar' => $socialiteUser->getAvatar() ?? '',
            'email' => $socialiteUser->getEmail() ?? '',
            'password' => Hash::make($password),
        ]);

        UserProvider::create([
            'user_id' => $user->getKey(),
            'provider_entity' => $provider,
            'provider_id' => $socialiteUser->getId()
        ]);

        return $user;
    }
}