<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.07.19
 * Time: 13:33
 */

namespace App\Checko\Offers\Http\Controller\Frontend;

use App\Checko\Models\OffersLike;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Checko\Models\OfferPost;
use Illuminate\Support\Facades\Auth;


class OffersController extends BaseController
{
    const LIMIT_PAGINATION = 5;

    public function all()
    {
        $limit = self::LIMIT_PAGINATION;
        $query = OfferPost::with('likes')->with('author')->paginate($limit);
        return response()->json($query);
    }


    public function like(int $post_id)
    {
        $offer = OffersLike::where('post_id', '=', $post_id)->get()->first();

        if (!$offer) {
            $offer = OffersLike::create(['post_id' => $post_id, 'users_id' => '']);
        }
        $listLikes = explode(',', $offer->users_id);
        $userId = auth()->id();

        if (!in_array($userId, $listLikes)) {
            $newLikesList[] = $userId;
            $offer->update(['users_id' => implode(',', $newLikesList)]);
            return response('', 200);
        } else {
            $key = array_search($userId, $listLikes);
            unset($listLikes[$key]);
            $offer->update(['users_id' => implode(',', $listLikes)]);
            return response($listLikes, 200);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->all();
        $data['author'] = Auth::id();
        $offer = OfferPost::create($data);
        return response()->json($offer);

    }


}