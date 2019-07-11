<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 10:22
 */

namespace App\Checko\CheckItemComment\Http\Controllers\Frontend;

use function GuzzleHttp\Promise\all;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\CheckItem;
use Illuminate\Support\Facades\Auth;
use App\Checko\Models\CheckItemComment;
use App\Checko\Models\CheckList;



class CheckItemCommentController extends BaseController
{

    public function __construct()
    {
        $this->middleware(['web', 'auth'])->except('all');
        $this->middleware('web')->only('all');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();

        $checkListId =  $request->get('check_list_id');
        $checkListOwner = CheckList::findOrFail($checkListId)->user;
        $data['check_list_owner'] = $checkListOwner->getKey();

        $comment =  CheckItemComment::create($data);
        $comment['owner'] = $comment->owner;

        return response()->json($comment);
    }


    /**
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function all(int $id)
    {
        $comments = CheckItemComment::where('check_item_id', '=', $id)->With('owner')->get();
        return response()->json($comments);
    }


    /**
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, int $id)
    {
        $comment = CheckItemComment::findOrFail($id);
        $CheckItemID = $comment->checkItem->check_item_id;

        if (Gate::allows('edit', $comment)) {
            $comment->update($request->all());
            $comment = $comment->fresh();
            $comment['owner'] = $comment->owner;

            return response()->json(['comment' => $comment, 'check_item_id' => $CheckItemID]);
        }else {
            return response()->json(['error' => 'you don\'t have permissions'], 422);
        }
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(int $id)
    {
        $comment = CheckItemComment::findOrFail($id);
        $CheckItemID = $comment->checkItem->check_item_id;
        if (Gate::allows('deleteComment', $comment)) {
            $comment->delete();
            return response()->json(['comment_id' => $id, 'check_item_id' => $CheckItemID]);
        }else {
            return response()->json(['error' => 'you don\'t have permissions'], 422);
        }
    }
}