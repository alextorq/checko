<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 02.04.19
 * Time: 17:24
 */



Route::group(['prefix' => 'frontend/user',  'as'=> 'user.'], function () {
    Route::get('/iam', ['uses' => 'UserController@iAm', 'as' => 'users.iam']);
    Route::post('/save_settings', ['uses' => 'UserController@changeUserSettings', 'as' => 'users.changeUserSettings']);
    Route::post('/change_password', ['uses' => 'UserController@changePassword', 'as' => 'users.changePassword']);
    Route::post('/change_name', ['uses' => 'UserController@changeName', 'as' => 'users.changeName']);
    Route::post('/change_avatar', ['uses' => 'UserController@changeAvatar', 'as' => 'users.changeAvatar']);


});