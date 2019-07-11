<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.03.19
 * Time: 11:45
 */

namespace App\Checko\CheckItem\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\CheckItem;
use Illuminate\Support\Facades\Auth;

class CheckItemController extends BaseController
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $item = $request->all();
        $checkItem = CheckItem::create($item);
        return response()->json($checkItem);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, $id)
    {
        $checkItem = CheckItem::findOrFail($id);
        $item = $request->input('item');
        $item = array_diff_key($item, array_flip(['check_list_id', 'check_item_id']));
        $checkItem->update($item);
        return response()->json($checkItem);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $checkItem = CheckItem::findOrFail($id);
        $checkItem->delete();
        return response()->json(true);
    }

    /**
     * edit order items by user select
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changeOrder(Request $request)
    {
        $items = $request->input('items');
        foreach ($items as $item) {
            $id = $item['check_item_id'];
            $checkItem = CheckItem::findOrFail($id);
            $item = array_diff_key($item, array_flip(['check_list_id', 'check_item_id']));
            $checkItem->update($item);
        }
        return response()->json(true);

    }

}