<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 04.02.19
 * Time: 15:56
 */

namespace App\Checko\AdminPanel\Http\Middleware;

use Silber\Bouncer\BouncerFacade as Bouncer;
use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAbilityToAdminPass
{
    /**
     * The Bouncer instance.
     *
     * @var \Silber\Bouncer\Bouncer
     */
    protected $bouncer;
    /**
     * Constructor.
     *
     * @param \Silber\Bouncer\Bouncer  $bouncer
     */
    public function __construct(Bouncer $bouncer)
    {
        $this->bouncer = $bouncer;
    }
    /**
     * Set the proper Bouncer scope for the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Here you may use whatever mechanism you use in your app
        // to determine the current tenant. To demonstrate, the
        // $tenantId is set here from the user's account_id.

        if ($this->bouncer::can('enter_to_admin_panel')) {
            return $next($request);
        }

        return $next($request);

        return abort(404);
    }
}