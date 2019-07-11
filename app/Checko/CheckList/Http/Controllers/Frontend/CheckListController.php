<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:58
 */

namespace App\Checko\CheckList\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\CheckList;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\User;


class CheckListController extends BaseController
{

    /**
     * get checklist by id
     * @param int $checklist id of checklist
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(int $checklist)
    {
        $checklist = CheckList::with('checkItems')->findOrFail($checklist);

        return response()->json($checklist);
    }

    /**
     * Get all lists of the user
     * @return \Illuminate\Http\JsonResponse
     */
    public function allListsUser()
    {
        if (Auth::check()) {
            $checklist = Auth::user()->checklists()->with('checkItems')->get();
            return response()->json($checklist);
        }

        return response()->json('you must be login', 401);
    }


    /**
     * Crete new list
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $inputParam = $request->all();

        if (Auth::check()) {
            $inputParam['user_id'] = Auth::id();
        }

        $checklist = CheckList::create($inputParam);
        $checklist['check_items'] = [];

        return response()->json($checklist);
    }


    /**
     * Delete list by id
     * @param int $checklist id list for delete
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(int $checklist)
    {
        $checklist = CheckList::findOrFail($checklist);
        $checklist->delete();

        return response()->json(true);
    }

    /**
     * Edit ald list
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request)
    {
        $inputParam = $request->all();
        $checklist = CheckList::findOrFail($inputParam['check_list_id']);
        $checklist->update($inputParam);

        return response()->json($checklist);
    }

    /**
     * All lists were created
     * @return \Illuminate\Http\JsonResponse
     */
    public function amountLists()
    {
        $allList = CheckList::all();
        $amoutList = $allList->count();

        return response()->json($amoutList);
    }
}