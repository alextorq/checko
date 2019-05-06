<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 26.04.19
 * Time: 14:11
 */

namespace App\Checko\Models;

use Illuminate\Database\Eloquent\Model;
use App\Checko\Models\CheckItem;
use App\User;

class CheckItemComment extends Model
{
    protected $table = 'check_item_comments';
    protected $primaryKey = 'comment_id';

    protected $guarded = ['comment_id'];

    protected $fillable = ['content', 'user_id', 'check_list_id', 'check_item_id'];

    public function checkItem()
    {
        /*error*/
        return $this->hasOne(CheckItem::class, 'check_item_id', 'check_item_id');
    }

    public function owner()
    {
        return $this->hasOne(User::class, 'user_id', 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function checkList()
    {
        return $this->hasOne(CheckList::class, 'check_list_id', 'check_list_id');
    }

    public function checkListOwner()
    {
        return $this->checkList->user ?? null;
    }

}