<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 02.04.19
 * Time: 17:24
 */

namespace App\Checko\Users\Http\Controllers\Frontend;

use Illuminate\Routing\Controller as BaseController;
use Auth;

class UserController extends BaseController
{

    public function iAm()
    {
        $user = Auth::user();
        $user['token'] = csrf_token();
        return response()->json(['user' => $user]);
    }

}