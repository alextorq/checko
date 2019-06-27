<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 25.06.19
 * Time: 14:39
 */

Route::group(['prefix' => 'admin_api/v1/pages',  'as'=> 'admin.pages.'], function () {
    Route::get('/all', ['uses' => 'DefaultPageController@all', 'as' => 'all']);
    Route::delete('/{id?}', ['uses' => 'DefaultPageController@delete', 'as' => 'delete']);
    Route::get('/{id?}', ['uses' => 'DefaultPageController@one', 'as' => 'getOne']);

    Route::post('/create', ['uses' => 'DefaultPageController@create', 'as' => 'create']);
    Route::put('/{id?}', ['uses' => 'DefaultPageController@edit', 'as' => 'edit']);
});

