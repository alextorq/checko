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

class CheckList extends Model
{
    protected $table = 'check_lists';
    protected $primaryKey = 'check_list_id';

    protected $guarded = ['check_list_id', 'user_id'];

    protected $fillable = ['name', 'complete', 'description', 'user_id'];

    public function checkItems()
    {
        return $this->hasMany(CheckItem::class, 'check_list_id', 'check_list_id');
    }

}