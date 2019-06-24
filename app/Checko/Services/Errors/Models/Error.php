<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 21.06.19
 * Time: 11:18
 */

namespace App\Checko\Services\Errors\Models;

use Illuminate\Database\Eloquent\Model;

class Error extends Model
{
    protected $table = 'frontend_errors';
    protected $primaryKey = 'error_id';

    protected $fillable = ['uri', 'browser', 'ip', 'type', 'details'];
}
