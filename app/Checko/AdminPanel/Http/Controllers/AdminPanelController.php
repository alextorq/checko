<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 28.01.19
 * Time: 11:55
 */

namespace App\Checko\AdminPanel\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AdminPanelController extends BaseController
{
    public function index()
    {
        return view('adminPanel/index');
    }
}