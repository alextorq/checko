<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 27.06.19
 * Time: 13:58
 */

namespace App\Checko\DefaultPages\Http\Controllers\Frontend;

use App\Checko\DefaultPages\Models\PageDefault;
use Illuminate\Routing\Controller as BaseController;


class DefaultPageController extends  BaseController
{
    /**
     * get page content by slug
     * @param PageDefault $page
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPage(PageDefault $page)
    {
        return response()->json($page);
    }
}