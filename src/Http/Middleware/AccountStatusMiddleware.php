<?php

namespace Maravel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Maravel\Http\Traits\CustomResponseTrait;

class AccountStatusMiddleware
{
    use CustomResponseTrait;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        if (auth()->check()) {
            $user = $request->user();

            // Vérifier si le compte est désactivé
            if (!$user->activated) {
                return $this->responseError([
                    "activated" => ["Votre compte est désactivé"],
                    "sub_code" => ["001"]
                ], 403);
            }

            // Vérifier si le changement de mot de passe est requis
            if ($user->password_change_required) {
                // Permettre uniquement les routes de mise à jour de mot de passe et de déconnexion
                if ($request->route()->getName() !== 'user.update-password' &&
                    $request->route()->getName() !== 'logout') {
                    return $this->responseError([
                        "password_change_required" => ["Vous devez changer votre mot de passe"],
                        "sub_code" => ["002"]
                    ], 403);
                }
            }
        }

        return $next($request);
    }
}
