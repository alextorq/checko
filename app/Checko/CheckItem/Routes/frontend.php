<?php

/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:46
 */

Route::group(['prefix' => 'frontend/checkitem',  'as'=> 'checkitem.'], function () {
    Route::post('/create', ['uses' => 'CheckItemController@createItem', 'as' => 'create']);
    Route::post('/order', ['uses' => 'CheckItemController@changeOrder', 'as' => 'create']);
    Route::post('/edit/{id}', ['uses' => 'CheckItemController@editItem', 'as' => 'edit']);
    Route::delete('/delete/{id}', ['uses' => 'CheckItemController@deleteItem', 'as' => 'delete']);

});