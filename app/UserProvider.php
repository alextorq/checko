<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 03.04.19
 * Time: 11:13
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property                    $user   -   User
 *
 * Class UserProvider
 * @package App
 */
class UserProvider extends Model
{
    protected $primaryKey = 'user_provider_id';

    protected $fillable = [
        'provider_entity',
        'provider_id',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    /**
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param array $params
     * @return mixed
     */
    public function scopeByProvider($query, array $params)
    {
        return $query->where('provider_entity', $params['entity'])->where('provider_id', $params['id']);
    }
}