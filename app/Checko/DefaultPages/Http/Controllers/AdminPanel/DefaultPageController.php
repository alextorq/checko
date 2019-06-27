<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 25.06.19
 * Time: 14:40
 */

namespace App\Checko\DefaultPages\Http\Controllers\AdminPanel;

use App\Checko\DefaultPages\Models\PageDefault;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;


class DefaultPageController extends  BaseController
{
    const LIMIT_PAGINATION = 5;

    public function create(Request $request)
    {
        $params = $request->all();

        Validator::make($request->all(), [
            'pagetitle' => 'required|min:2',
            'content' => 'required',
        ])->validate();

        $page = PageDefault::create($params);
        return response($page);
    }

    public function one($id)
    {

        $page = PageDefault::findOrFail($id);
        return response()->json($page);
    }

    public function delete($id)
    {
        $page = PageDefault::findOrFail($id);
        $page->delete();
        return response('true');
    }

    public function edit(Request $request, $id)
    {
        $params = $request->all();

        Validator::make($request->all(), [
            'pagetitle' => 'required|min:2',
            'content' => 'required',
        ])->validate();

        $page = PageDefault::findOrFail($id);
        $page->update($params);
        return response()->json($page);
    }

    public function all(Request $request)
    {
        $limit = $request->input('limit', self::LIMIT_PAGINATION);
        $pages = PageDefault::paginate($limit);

        return response()->json($pages);
    }


}