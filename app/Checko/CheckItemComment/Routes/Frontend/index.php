<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 10:21
 */


Route::group(['prefix' => 'frontend/checkitem_comment',  'as'=> 'checkitemcomment.'], function () {
    Route::post('/comments/', ['uses' => 'CheckItemCommentController@create', 'as' => 'create']);
    Route::put('/comments/{id}', ['uses' => 'CheckItemCommentController@edit', 'as' => 'edit']);
    Route::get('/comments/{id}', ['uses' => 'CheckItemCommentController@all', 'as' => 'all']);
    Route::delete('/comments/{id}', ['uses' => 'CheckItemCommentController@delete', 'as' => 'delete']);
});


