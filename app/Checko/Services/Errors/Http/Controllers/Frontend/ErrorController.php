<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.06.19
 * Time: 11:17
 */

namespace App\Checko\Services\Errors\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Services\Errors\Models\Error;

class ErrorController extends BaseController
{
    public function save(Request $request)
    {
        $data = $request->all();
        $data['ip'] = request()->ip();
        $error = Error::create($data);
        return response()->json($error);
    }

}