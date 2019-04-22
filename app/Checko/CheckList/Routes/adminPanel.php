<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 01.04.19
 * Time: 9:21
 */


Route::group(['prefix' => 'admin_api/v1//checklist',  'as'=> 'admin.checklist.'], function () {
    Route::put('/edit', ['uses' => 'CheckListController@editCheckList', 'as' => 'edit']);
    Route::get('/edit', ['uses' => 'CheckListController@editCheckList', 'as' => 'edit']);
    Route::get('/{checklist?}', ['uses' => 'CheckListController@index', 'as' => 'index'])->where('checklist', '[\/\w\.-]*');
    Route::post('/{checklist?}', ['uses' => 'CheckListController@indexPost', 'as' => 'index'])->where('checklist', '[\/\w\.-]*');

});

