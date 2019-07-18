<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 15.03.19
 * Time: 14:13
 */

namespace App\Checko\Models;

use Illuminate\Database\Eloquent\Model;
use App\Checko\Models\CheckItem;

use App\User;

class CheckList extends Model
{
    protected $table = 'check_lists';
    protected $primaryKey = 'check_list_id';

    protected $guarded = ['check_list_id', 'user_id'];

    protected $fillable = ['name', 'complete', 'description', 'user_id'];

    protected $casts = [
        'complete' => 'boolean'
    ];

    public function clone()
    {
        $new = $this->replicate();
        $this->load('checkItems');
        $new->push();
//
//        /*disable event dispatch on update model*/
//        $dispatcher = $new->getEventDispatcher();
//        $new->unsetEventDispatcher();

        foreach($this->checkItems as $item)
        {
            $itemCheck = $item->replicate();
            $new->checkItems()->save($itemCheck);
        }
        $new->push();
        /*enable dispatch*/
//        $new->setEventDispatcher($dispatcher);
        return $new->load('checkItems');
    }


    public function checkItems()
    {
        return $this->hasMany(CheckItem::class, 'check_list_id', 'check_list_id');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'user_id', 'user_id');
    }

}