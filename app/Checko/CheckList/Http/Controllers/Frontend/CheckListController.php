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

    public function index()
    {
        return view('welcome');
    }

    public function indexPost(int $checklist)
    {
        $checklist = CheckList::with('checkItems')->findOrFail($checklist);
        return response()->json($checklist);
    }

    public function allUsersList()
    {
        if (Auth::check()) {
            $checklist = Auth::user()->checklists()->with('checkItems')->get();
            return response()->json($checklist);
        }

        return response()->json('you must be login', 401);
    }

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

    public function delete(int $checklist)
    {
        $checklist = CheckList::findOrFail($checklist);
        $checklist->delete();

        return response()->json(true);
    }

    public function edit(Request $request)
    {
        $inputParam = $request->all();
        $checklist = CheckList::findOrFail($inputParam['check_list_id']);
        $checklist->update($inputParam);
        return response()->json($checklist);
    }

    public function amountLists()
    {
        $allList = CheckList::all();
        $amoutList = $allList->count();
        return response()->json($amoutList);
    }
}