<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 30.04.19
 * Time: 10:22
 */

namespace App\Checko\CheckItemComment\Http\Controllers\Frontend;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\CheckItem;
use Illuminate\Support\Facades\Auth;
use App\Checko\Models\CheckItemComment;


class CheckItemCommentController extends BaseController
{
    public function addComment(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();
        $comment =  CheckItemComment::create($data);
        $comment['owner'] = $comment->owner;

        return response()->json($comment);
    }


    public function allComments(int $id)
    {
        $comments = CheckItemComment::where('check_item_id', '=', $id)->With('owner')->get();
        return response()->json($comments);
    }


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