<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 12:00
 */


Route::group(['prefix' => 'frontend/checklist',  'as'=> 'checklist.'], function () {
    Route::post('/create', ['uses' => 'CheckListController@createCheckList', 'as' => 'create']);
    Route::put('/edit', ['uses' => 'CheckListController@editCheckList', 'as' => 'edit']);
    Route::get('/edit', ['uses' => 'CheckListController@editCheckList', 'as' => 'edit']);
    Route::get('/{checklist?}', ['uses' => 'CheckListController@index', 'as' => 'index'])->where('checklist', '[\/\w\.-]*');



});