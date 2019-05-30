<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 01.04.19
 * Time: 9:21
 */


Route::group(['prefix' => 'admin_api/v1/checklist',  'as'=> 'admin.checklist.'], function () {
    Route::get('/all', ['uses' => 'CheckListController@all', 'as' => 'all']);
    Route::delete('/{checklist?}', ['uses' => 'CheckListController@delete', 'as' => 'delete']);
    Route::get('/{checklist?}', ['uses' => 'CheckListController@getList', 'as' => 'getOne']);

    Route::post('/create', ['uses' => 'CheckListController@create', 'as' => 'create']);
    Route::put('/edit', ['uses' => 'CheckListController@edit', 'as' => 'edit']);



});
