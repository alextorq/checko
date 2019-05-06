<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 10:21
 */


Route::group(['prefix' => 'frontend/checkitemcomment',  'as'=> 'checkitemcomment.'], function () {
    Route::post('/comments/', ['uses' => 'CheckItemCommentController@addComment', 'as' => 'addComment']);
    Route::get('/comments/{id}', ['uses' => 'CheckItemCommentController@allComments', 'as' => 'allComments']);
    Route::delete('/comments/{id}', ['uses' => 'CheckItemCommentController@delete', 'as' => 'delete']);
});


