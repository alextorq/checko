<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 29.01.19
 * Time: 11:16
 */

namespace App\Checko\Users\Http\Controllers\AdminPanel;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use App\User;
use Auth;

class UsersController extends BaseController
{
    const LIMIT_PAGINATION = 5;
    /**
     * Get all user by page
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function all(Request $request)
    {
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $limit = $request->input('limit', self::LIMIT_PAGINATION);
        $withTrashed = $request->input('trash');
        $searchColumn = $request->input('searchType');
        $searchQuery = $request->input('searchQuery');

        $query = User::query();
        $query->when(($withTrashed === 'true'), function ($query) {
            return $query->withTrashed();
        });

        $query->when($startDate, function ($query) use ($startDate , $endDate) {
            return $query->whereBetween('created_at', array($startDate, $endDate));
        });

        $query->when($searchColumn, function ($query) use ($searchColumn, $searchQuery) {
            return $query->where($searchColumn, 'like', '%' . $searchQuery . '%');
        });

        $allUsers = $query->paginate($limit)->toJson();
        return response($allUsers);
    }

    /**
     * All information about user: payment, history...
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserByID($user)
    {
        $user = User::withTrashed()->findOrFail($user);
        $roles = $user->getRoles();
        return response()->json(['user' => $user, 'roles' => $roles]);
    }

    /**
     * @param string $user id
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore(string $user)
    {
        $user = User::withTrashed()->findOrFail($user)->restore();
        return response()->json(['user' => $user]);
    }

    /**
     * Delete user by id
     * @param Request $request
     * @param string $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request, string $user)
    {
        $force = $request->input('force', false);
        $user = User::withTrashed()->findOrFail($user);
        if ($force === 'true') {
            $user->forceDelete();
        }else{
            $user->delete();
        }
        return response()->json(['status' => 'success']);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserByTime(Request $request)
    {
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $lastUsers = User::whereBetween('created_at', array($startDate, $endDate))
            ->orderBy('created_at', 'asc')->get();

        return response()->json(['users' => $lastUsers]);
    }

    /**
     * Get last registration users
     * @param int $amount amount user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLastUser(int $amount = 5) {
        DB::enableQueryLog();
        $lastUsers = User::latest('created_at')->take($amount)->get();
        Log::info(DB::getQueryLog());
        return response()->json(['users' => $lastUsers]);
    }

    /**
     * Who request me
     * @return \Illuminate\Http\JsonResponse
     */
    public function iAm()
    {
        $user = Auth::user();
        return response()->json(['user' => $user]);
    }
}