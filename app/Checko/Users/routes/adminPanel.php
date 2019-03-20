<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 29.01.19
 * Time: 11:12
 */

Route::group(['prefix' => 'admin_api/v1',  'as'=> 'admin_api.'], function () {
    Route::get('/users/iam', ['uses' => 'UsersController@iAm', 'as' => 'users.iam']);
    Route::get('/users/all', ['uses' => 'UsersController@all', 'as' => 'users']);
    Route::get('/users/last_users/{amount?}', ['uses' => 'UsersController@getLastUser', 'as' => 'user.last']);
    Route::get('/users/by_time', ['uses' => 'UsersController@getUserByTime', 'as' => 'user.time']);
    Route::get('/users/{user}', ['uses' => 'UsersController@getUserByID', 'as' => 'users.info']);
    Route::put('/users/restore/{user}', ['uses' => 'UsersController@restore', 'as' => 'users.restore']);
    Route::delete('/users/{user}', ['uses' => 'UsersController@delete', 'as' => 'users.delete']);

});

//'middleware' => 'admin_pass',