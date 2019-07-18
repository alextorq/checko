<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.07.19
 * Time: 13:30
 */

namespace App\Checko\Models;

use Illuminate\Database\Eloquent\Model;
use App\Checko\Models\OfferPost;

class OffersLike extends Model
{
    protected $table = 'offers_likes_users';
    protected $primaryKey = 'offer_likes_id';

    protected $fillable = ['post_id', 'users_id', 'like_count'];


//    protected $casts = [
//        'users_id' => 'array'
//    ];

    public function offerPost()
    {
        return $this->belongsTo(OfferPost::class, 'post_id', 'post_id');
    }

}