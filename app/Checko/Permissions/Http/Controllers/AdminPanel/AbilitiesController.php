<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 07.02.19
 * Time: 15:31
 */

namespace App\Checko\Permissions\Http\Controllers\AdminPanel;

use App\Http\Controllers\Controller as BaseController;
use Bouncer;
use Validator;
use Illuminate\Http\Request;
use App\User;

class AbilitiesController extends  BaseController
{
    /**
     * get list of availabilities
     * @return \Illuminate\Http\JsonResponse
     */
    public function listAvailability()
    {
        $ability = Bouncer::ability()->all();
        return response()->json(['ability' => $ability]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createAbility(Request $request)
    {
        $params = $request->only('name', 'title');

        $validator = Validator::make($params, [
            'name' => 'required|unique:abilities|min:4|max:255',
            'title' => 'required|min:5|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $ability = Bouncer::ability()->firstOrCreate([
            'name' => $params['name'],
            'title' => $params['title'],
        ]);
        return response()->json(['ability' => $ability]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function allowAbilityToRole(Request $request)
    {
        $params = $request->only('roleID','abilityID');
        $role = Bouncer::role()->findOrFail($params['roleID']);
        $ability = Bouncer::ability()->findOrFail($params['abilityID']);
        Bouncer::allow($role)->to($ability);
        return response()->json(['status' => 'success']);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function disallowAbilityToRole(Request $request)
    {
        $params = $request->only('roleID','abilityID');
        $role = Bouncer::role()->findOrFail($params['roleID']);
        $ability = Bouncer::ability()->findOrFail($params['abilityID']);
        Bouncer::disallow($role)->to($ability);
        return response()->json(['status' => 'success']);
    }


}