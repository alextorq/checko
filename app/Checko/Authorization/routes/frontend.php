<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.04.19
 * Time: 11:09
 */

Route::get('/provider/login', 'AuthorizationController@authorization');
Route::get('/provider', 'AuthorizationController@login')->name('provider.login');
