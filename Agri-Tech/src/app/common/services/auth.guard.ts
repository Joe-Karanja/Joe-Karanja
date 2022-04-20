import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        
        if (this._authService.isLoggedIn()) {  return true; }

        // Store the attempted URL for redirecting
        this._authService.redirectURL = url;

        // Navigate to the login page with extras
        this._router.navigate(['/auth/login'], { queryParams: { r: url }});
        return false;
    }
}
