<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 02.04.19
 * Time: 17:24
 */

namespace App\Checko\Users\Http\Controllers\Frontend;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\Checko\Models\UserProfile;
use Illuminate\Support\Facades\Storage;
use Validator;


class UserController extends BaseController
{

    public function iAm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user['token'] = csrf_token();
            $user['profile'] = $user->profile;
            return response()->json(['user' => $user]);
        }else {
            return response()->json('user not found', 500);
        }

    }

    public function changeUserSettings(Request $request)
    {
        $user = Auth::user();
        $newUserSettings = $request->get('settings');

        $newUserSettings = json_encode($newUserSettings);
        $profile = $user->profile()->update(['user_settings' => $newUserSettings]);

        return response()->json($profile);

    }

    public function changePassword(Request $request)
    {
        Validator::make($request->all(), [
            'oldPassword' => 'required|min:8',
            'newPassword' => 'required|confirmed|min:8',
        ])->validate();

        $user = Auth::user();
        if (Hash::check($request->get('oldPassword'), $user->password))  {
            $user->update(['password' => Hash::make($request->get('oldPassword'))]);
            return response()->json($user);
        } else {
            return response()->json(['errors' => ['oldPassword' => ['The old password is not valid.']]], 422);
        }


    }

    public function changeName(Request $request)
    {
        $user = Auth::user();
        $user->update(['name' => $request->get('name')]);
        return response('', 200);
    }

    public function changeAvatar(Request $request)
    {
        Validator::make($request->all(), [
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ])->validate();


        $user = Auth::user();
        $image = $request->file('avatar');
        $name = time() . '.' . $image->getClientOriginalExtension();

        $pathDestination = sprintf('public/%s/avatar/', $user->getKey());
        $publicPath =  sprintf('/storage/%s/avatar/', $user->getKey());

        $this->createDirectoryIfNotExist($pathDestination);
        $this->deleteAvatarIfExist($user);

        $image->storeAs($pathDestination, $name);
        $user->update(['avatar' => $publicPath . $name]);

        return response($user->avatar, 200);

    }

    /**
     * Проверка на то лежит ли аватар пользователя на сервере
     * и если есть то удалить предыдущий
     * @param User $user
     */
    private function deleteAvatarIfExist (User $user) {
            $userAvatar = $user->avatar;
            $userId = $user->getKey();
            $avatarIsLocal = stripos($userAvatar, '/storage/' . $userId);

            if ($avatarIsLocal !== false) {
                $pathToAvatar = str_replace('/storage', 'public', $userAvatar);

                if (file_exists(storage_path('app/' . $pathToAvatar))) {
                    Storage::delete($pathToAvatar);
                }
            }
    }

    /**
     * Создание директории если она не существует
     * @param string $name
     */
    private function createDirectoryIfNotExist(string $name) :void
    {
        if (!is_dir(storage_path('app/' . $name))) {
            $result = Storage::makeDirectory($name);
        }
    }

}