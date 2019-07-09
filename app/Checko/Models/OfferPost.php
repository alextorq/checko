<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.07.19
 * Time: 11:43
 */

namespace App\Checko\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class OfferPost extends Model
{
    protected $table = 'offers_post';
    protected $primaryKey = 'post_id';

    protected $fillable = ['author', 'content'];

    public function likes()
    {
        return $this->hasOne(OffersLike::class, 'post_id', 'post_id');
    }

    public function author()
    {
        return $this->hasOne(User::class, 'user_id', 'author');
    }
}