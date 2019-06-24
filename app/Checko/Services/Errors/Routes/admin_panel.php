<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 24.06.19
 * Time: 11:12
 */



Route::group(['prefix' => 'admin_api/v1/errors',  'as'=> 'admin.errors.'], function () {
    Route::get('/all', ['uses' => 'ErrorController@all', 'as' => 'all']);
    Route::delete('/{error?}', ['uses' => 'ErrorController@delete', 'as' => 'delete']);
    Route::get('/{error?}', ['uses' => 'ErrorController@getOne', 'as' => 'getOne']);
});


