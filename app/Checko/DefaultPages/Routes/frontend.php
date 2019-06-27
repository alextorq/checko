<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 27.06.19
 * Time: 13:41
 */


Route::group(['prefix' => 'frontend/pages',  'as'=> 'frontend.pages.'], function () {
    Route::post('/{page}', ['uses' => 'DefaultPageController@getPage', 'as' => 'page']);
});

