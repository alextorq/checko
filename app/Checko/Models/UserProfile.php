<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 22.04.19
 * Time: 13:30
 */

namespace App\Checko\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class UserProfile extends Model
{
    protected $table = 'user_profiles';
    protected $primaryKey = 'user_profile_id';

    protected $guarded = ['user_profile_id', 'user_id'];

    protected $fillable = ['user_settings', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}