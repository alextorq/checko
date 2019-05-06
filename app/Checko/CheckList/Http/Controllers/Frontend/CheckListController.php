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

class CheckListController extends BaseController
{

    public function index()
    {
        return view('welcome');
    }

    public function indexPost($checklist)
    {
        $checklist = CheckList::with('checkItems')->whereIn('check_list_id', [$checklist])->first();
        if (!$checklist) {
            return response()->json(null, 404);
        }
        return response()->json($checklist);
    }

    public function createCheckList(Request $request)
    {
        $inputParam = $request->all();

        if (Auth::check()) {
            $inputParam['user_id'] = Auth::id();
        }

        $checklist = CheckList::create($inputParam);
        return response()->json($checklist);
    }

    public function editCheckList(Request $request)
    {
        $inputParam = $request->all();
        $checklist = CheckList::findOrFail($inputParam['check_list_id']);
        $checklist->update($inputParam);
        return response()->json($checklist);

    }
}