<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 25.06.19
 * Time: 14:38
 */

namespace App\Checko\DefaultPages\Models;

use Illuminate\Database\Eloquent\Model;

class PageDefault extends Model
{
    protected $table = 'default_pages';
    protected $primaryKey = 'page_id';
    protected $casts = [
        'publish' => 'boolean',
    ];
    protected $fillable = ['pagetitle', 'slug', 'longtitle', 'publish', 'introtext', 'description', 'content'];

    public function getRouteKeyName()
    {
        return 'slug';
    }


}

