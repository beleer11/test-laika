<?php

namespace App\Http\Middleware;

use Closure;
use Response;
use Illuminate\Http\Request;


class ApiLaikaMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!isset($_SERVER['HTTP_X_HARDIK'])){
            return Response::json(array('error'=>'Please set custom header'));
        }

        if($_SERVER['HTTP_X_HARDIK'] != 'api-key-laika'){
            return Response::json(array('error'=>'wrong custom header'));
        }

        return $next($request);
    }
}
