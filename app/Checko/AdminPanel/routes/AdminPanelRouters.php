<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 28.01.19
 * Time: 11:54
 */



Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::get('/{vue_capture?}', ['uses' => 'AdminPanelController@index', 'as' => 'index'])->where('vue_capture', '[\/\w\.-]*');
});
