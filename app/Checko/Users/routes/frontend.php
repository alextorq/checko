<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 02.04.19
 * Time: 17:24
 */



Route::group(['prefix' => 'frontend/user',  'as'=> 'user.'], function () {
    Route::get('/iam', ['uses' => 'UserController@iAm', 'as' => 'users.iam']);
});