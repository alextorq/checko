<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 26.02.19
 * Time: 16:02
 */

namespace App\Checko\Permissions\Http\Controllers\AdminPanel;

use App\Http\Controllers\Controller as BaseController;
use Bouncer;
use Validator;
use Illuminate\Http\Request;
use App\User;

class RolesController extends BaseController
{
    /**
     * get list of roles
     * @return \Illuminate\Http\JsonResponse
     */
    public function listRoles()
    {
        $roles = Bouncer::role()->all();
        return response()->json(['roles' => $roles]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createRole(Request $request)
    {
        $params = $request->only('name', 'title', 'level');
        $validator = Validator::make($params, [
            'name' => 'required|unique:roles|min:4|max:255',
            'title' => 'required|min:5|max:255',
            'level' => 'integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $role = Bouncer::role()->firstOrCreate([
            'name' => $params['name'],
            'title' => $params['title'],
        ]);
        return response()->json(['role' => $role]);
    }

    /**
     * @param Request $request
     * @param $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteRole(Request $request, $name)
    {
        $force = $request->input('force', false);
        $users = User::whereIs($name)->get();
        $role = Bouncer::role()->where('name', $name)->firstOrFail();
        $abilities = $role->getAbilities();

        if ($users->count() || $abilities->count()) {
            if (!$force) {
                return response()
                    ->json(['users' => $users, 'abilities' => $abilities, 'status' => 'failed'], 422);
            }else{
                foreach ($users as $user) {
                    Bouncer::retract($name)->from($user);
                }

                foreach ($abilities as $ability) {
                    Bouncer::disallow($name)->to($ability);
                }

                $role->delete();
                return response()->json(['status' => 'success']);
            }
        }else{
            $role->delete();
            return response()->json(['status' => 'success']);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function retractUserToRole(Request $request)
    {
        $params = $request->only('user', 'roleName');
        $user = User::findOrFail($params['user']);
        Bouncer::retract($params['roleName'])->from($user);
        return response()->json(['status' => 'success']);
    }

    /**
     * name and abilities from role name
     * @param String $name имя роли
     * @return \Illuminate\Http\JsonResponse
     */
    public function role(String $name = '')
    {
        $role = Bouncer::role()->where('name', $name)->firstOrFail();
        $abilities = $role->getAbilities();
        $users = User::whereIs($name)->get();
        return response()->json(['users' => $users, 'abilities' => $abilities, 'role' => $role]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function assignUserToRole(Request $request)
    {
        $params = $request->only('users', 'roleName');
        $users = User::whereIn('user_id', $params['users'])->get();
        foreach ($users as $user) {
            Bouncer::assign($params['roleName'])->to($user);
        }
        return response()->json(['status' => 'success']);
    }

}