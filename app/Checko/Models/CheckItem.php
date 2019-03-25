<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 15.03.19
 * Time: 14:59
 */

namespace App\Checko\Models;

use Illuminate\Database\Eloquent\Model;
use App\Checko\Models\CheckList;

class CheckItem extends Model
{
    protected $table = 'check_items';
    protected $primaryKey = 'check_item_id';

    protected $guarded = ['check_item_id', 'check_list_id'];

    protected $fillable = ['name', 'complete', 'description', 'check_list_id', 'order', 'timestamp_id', 'date_complete'];

    public function cheklist()
    {
        return $this->belongsTo(CheckList::class, 'check_list_id', 'check_lists_id');
    }
}