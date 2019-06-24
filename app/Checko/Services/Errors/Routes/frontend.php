<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.06.19
 * Time: 11:14
 */


Route::group(['prefix' => 'frontend/errors',  'as'=> 'frontent_error.'], function () {
    Route::post('/', ['uses' => 'ErrorController@save', 'as' => 'save']);
});