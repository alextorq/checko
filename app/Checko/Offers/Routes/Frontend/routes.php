<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.07.19
 * Time: 14:04
 */


Route::group(['prefix' => 'frontend/offers',  'as'=> 'offers.'], function () {
    Route::post('/create', ['uses' => 'OffersController@create', 'as' => 'create']);
    Route::get('/all', ['uses' => 'OffersController@all', 'as' => 'all']);
    Route::post('/like/{post_id}', ['uses' => 'OffersController@like', 'as' => 'like']);
});