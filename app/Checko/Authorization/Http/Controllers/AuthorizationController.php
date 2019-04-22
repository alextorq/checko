<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.04.19
 * Time: 11:09
 */

namespace App\Checko\Authorization\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Checko\Repository\UserAuthrepository;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use SocialiteProviders\Instagram\Provider;

class AuthorizationController extends Controller
{
    /**
     * @var UserAuthrepository
     */
    private $userRepository;

    public function __construct(UserAuthrepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Авторизация
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function authorization(Request $request)
    {
        $provider = $request->session()->get('provider');

        $provider = $this->detectProvider($provider);

        $socialiteUser = $provider->user();

        $user = $this->userRepository->findOrCreate($socialiteUser, $request->session()->get('provider'));

        auth()->login($user, true);

        return redirect('/');
    }

    /**
     * Редирект на страницу входа в систему
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function login(Request $request)
    {
        $provider = $request->get('provider', '');

        $provider = $this->detectProvider($provider);


//        dd($provider);

        if (is_null($provider)) {
            return redirect('/');
        }

        $request->session()->flash('provider', $request->get('provider'));

        return $provider->redirect();
    }

    /**
     * Опрделяем с помощью чего делать авторизацию
     *
     * @param string $provider
     * @return Provider
     */
    protected function detectProvider(string $provider)
    {
        switch ($provider):
            case 'google':
                return Socialite::with('google');
            case 'facebook':
                return Socialite::with('facebook');
            case 'twitter':
                return Socialite::with('twitter');
            default:
                return null;
        endswitch;
    }
}