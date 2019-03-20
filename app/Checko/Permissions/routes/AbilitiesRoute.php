<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 07.02.19
 * Time: 15:39
 */

Route::group(['prefix' => 'admin_api/v1/permissions',  'as'=> 'admin_api.permissions.'], function () {
    Route::post('/availability/create', ['uses' => 'AbilitiesController@createAbility', 'as' => 'ability.create']);
    Route::post('/availability/allow', ['uses' => 'AbilitiesController@allowAbilityToRole', 'as' => 'ability.allow']);
    Route::post('/availability/disallow', ['uses' => 'AbilitiesController@disallowAbilityToRole', 'as' => 'ability.disallow']);
    Route::get('/availability/all', ['uses' => 'AbilitiesController@listAvailability', 'as' => 'abilities']);
});
