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
    public function __construct()
    {
        $this->middleware(['web', 'auth'])->except('all');
    }

    const LIMIT_PAGINATION = 5;

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function all(Request $request)
    {
        $sortBy = $request->get('sortBy', 'likes.like_count');
        $limit = self::LIMIT_PAGINATION;

        $query = OfferPost::join('offers_likes_users AS likes', 'offers_post.post_id', '=', 'likes.post_id')
            ->join('users AS author', 'author.user_id', '=', 'offers_post.author')
            ->orderBy($sortBy, 'desc')
            ->select('likes.users_id', 'likes.like_count', 'author.name', 'author.avatar', 'offers_post.*' )
            ->paginate($limit);
        return response()->json($query);
    }

    /**
     * Like or unlike some post
     * @param int $post_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function like(int $post_id)
    {
        $offer = OffersLike::where('post_id', '=', $post_id)->get()->first();
        $listLikes = json_decode($offer->users_id);
        $userId = auth()->id();
        $like_count = $offer->like_count;

        if (!in_array($userId, $listLikes)) {
            $newLikesList[] = $userId;
            $offer->update(['users_id' => json_encode($newLikesList), 'like_count' => ++$like_count]);
            return response($newLikesList, 200);
        /*unlike*/
        } else {
            $key = array_search($userId, $listLikes);
            unset($listLikes[$key]);
            $offer->update(['users_id' => json_encode($listLikes), 'like_count' => --$like_count]);
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
        $data['like_count'] = 0;
        $data['users_id'] = json_encode(array());;
        $data['author'] = Auth::id();

        $offer = OfferPost::create($data);
        $offer->likes()->create($data);
        return response()->json($offer);
    }


}