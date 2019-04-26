<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use App\Checko\Models\UserProfile;
use App\Checko\Models\CheckList;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    use HasRolesAndAbilities;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primaryKey = 'user_id';

    protected $fillable = [
        'name', 'email', 'password', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function checklists() {
        return $this->hasMany(CheckList::class, 'user_id', 'user_id');
    }

    public function profile()
    {
        return $this->hasOne(UserProfile::class, 'user_profile_id', 'user_id');
    }
}
