<?php

/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:46
 */

Route::group(['prefix' => 'frontend/checkitem',  'as'=> 'checkitem.'], function () {
    Route::post('/create', ['uses' => 'CheckItemController@create', 'as' => 'create']);
    Route::post('/order', ['uses' => 'CheckItemController@changeOrder', 'as' => 'create']);
    Route::post('/edit/{id}', ['uses' => 'CheckItemController@edit', 'as' => 'edit']);
    Route::delete('/delete/{id}', ['uses' => 'CheckItemController@delete', 'as' => 'delete']);
});