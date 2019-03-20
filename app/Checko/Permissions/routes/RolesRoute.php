<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 26.02.19
 * Time: 16:04
 */

Route::group(['prefix' => 'admin_api/v1/permissions',  'as'=> 'admin_api.permissions.'], function () {
    Route::get('/roles/all', ['uses' => 'RolesController@listRoles', 'as' => 'roles']);
    Route::get('/roles/{name?}', ['uses' => 'RolesController@role', 'as' => 'role']);
    Route::delete('/roles/{name?}', ['uses' => 'RolesController@deleteRole', 'as' => 'role.delete']);
    Route::post('/roles/create', ['uses' => 'RolesController@createRole', 'as' => 'role.create']);
    Route::post('/roles/assign', ['uses' => 'RolesController@assignUserToRole', 'as' => 'role.assign']);
    Route::post('/roles/retract', ['uses' => 'RolesController@retractUserToRole', 'as' => 'role.retract']);
});
