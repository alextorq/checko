<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 12:00
 */


Route::group(['prefix' => 'frontend/checklist',  'as'=> 'checklist.'], function () {
    Route::post('/create', ['uses' => 'CheckListController@create', 'as' => 'create']);
    Route::put('/edit', ['uses' => 'CheckListController@edit', 'as' => 'edit']);
    Route::get('/all', ['uses' => 'CheckListController@allUsersList', 'as' => 'all']);
    Route::get('/{checklist?}', ['uses' => 'CheckListController@index', 'as' => 'index'])->where('checklist', '[\/\w\.-]*');
    Route::post('/{checklist?}', ['uses' => 'CheckListController@indexPost', 'as' => 'index'])->where('checklist', '[\/\w\.-]*');

});