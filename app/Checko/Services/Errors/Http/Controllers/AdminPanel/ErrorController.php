<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 24.06.19
 * Time: 11:10
 */

namespace App\Checko\Services\Errors\Http\Controllers\AdminPanel;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Services\Errors\Models\Error;

class ErrorController extends BaseController
{
    const LIMIT_PAGINATION = 5;

    public function all(Request $request)
    {
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $limit = $request->input('limit', self::LIMIT_PAGINATION);
        $searchColumn = $request->input('searchType');
        $searchQuery = $request->input('searchQuery');

        $query = Error::query();

        $query->when($startDate, function ($query) use ($startDate , $endDate) {
            return $query->whereBetween('created_at', array($startDate, $endDate));
        });

        $query->when($searchColumn, function ($query) use ($searchColumn, $searchQuery) {
            return $query->where($searchColumn, 'like', '%' . $searchQuery . '%');
        });

        $allErrors = $query->paginate($limit)->toJson();
        return response($allErrors);
    }

    public function delete($error)
    {
        $error = Error::findOrFail($error);
        $error->delete();
        return response()->json(true);
    }

    public function getOne($error)
    {
        $error = Error::findOrFail($error);
        return response()->json($error);
    }


}