<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 01.04.19
 * Time: 9:20
 */

namespace App\Checko\CheckList\Http\Controllers\AdminPanel;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\CheckList;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CheckListController
{
    const LIMIT_PAGINATION = 5;

    public function all(Request $request)
    {
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $limit = $request->input('limit', self::LIMIT_PAGINATION);
        $searchColumn = $request->input('searchType');
        $searchQuery = $request->input('searchQuery');
        $complete = $request->input('complete');

        $query = CheckList::query();

        $query->when(($complete === 'true'), function ($query) {
            return $query->where('complete', true);
        });

        $query->when($startDate, function ($query) use ($startDate , $endDate) {
            return $query->whereBetween('created_at', array($startDate, $endDate));
        });

        $query->when($searchColumn, function ($query) use ($searchColumn, $searchQuery) {
            return $query->where($searchColumn, 'like', '%' . $searchQuery . '%');
        });

        $checklist = $query->paginate($limit)->toJson();
        return response($checklist);

    }

    public function delete(int $checklist)
    {
        $checklist = CheckList::findOrFail($checklist);
        $checklist->delete();

        return response()->json(true);
    }

    public function getList(int $checklist) {
        $checklist = CheckList::with('checkItems')->findOrFail($checklist);

        return response()->json($checklist);
    }


    public function indexPost(int $checklist)
    {
        $checklist = CheckList::with('checkItems')->findOrFail($checklist);
        return response()->json($checklist);
    }

    public function allUsersList()
    {
        $checklist = Auth::user()->checklists()->with('checkItems')->get();
        return response()->json($checklist);
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

    public function edit(Request $request)
    {
        $inputParam = $request->all();
        $checklist = CheckList::findOrFail($inputParam['check_list_id']);
        $checklist->update($inputParam);
        return response()->json($checklist);
    }
}