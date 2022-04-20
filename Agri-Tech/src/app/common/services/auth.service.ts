// import { ToastrService } from 'ngx-toastr';

import { GlobalService } from "./global.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public jwtHelper: JwtHelperService = new JwtHelperService();
    private _currentUser: any;
    public loggedIn = false;
    public redirectURL = "";
    //token: any;

    constructor(
        // private handler: HttpBackend,
        private _router: Router,
        private http: HttpClient,
        public _globalService: GlobalService
    ) // private toastrService: ToastrService
    {
        // this.http = new HttpClient(this.handler);

        // this.isAdmin()

        const token = this.getToken;
        if (token) {
            this._currentUser = this.jwtHelper.decodeToken(token);
        }
        // this.isAuthenticated();

    }
    // private getHeaders(): HttpHeaders {
    //     return new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     });
    // }
    private static generateHeaders(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            })
        };
    }
    public login(model: any) {
        return this.http
            .post(this._globalService.apiHost + '/admin-login', model, AuthService.generateHeaders())
            .pipe(map((data) => {
                // console.log(data['token'])
                if (data["success"]) {
                    localStorage.setItem("auth_token", JSON.stringify(data['data']['token']))
                    this._currentUser = this.jwtHelper.decodeToken(
                        localStorage.getItem("auth_token")
                    );
                    this.loggedIn = true;
                    return data;
                } else {
                    localStorage.removeItem("auth_token");
                    this.loggedIn = false;
                }
                return data;
                // console.log(data);
            })
            );
    }
    public logout(): void {
        localStorage.removeItem("token");
        this._currentUser = null;
        this.loggedIn = false;
        this._router.navigate(['/auth/login'])
    }
    public getRoles(): any { }
    get getToken(): any {
        return localStorage.getItem("auth_token");
    }
  
    get currentUser() {
        if (this.isAuthenticated()) {
            return this._currentUser; 
        }
        else {
            return null;
        }
    }
    public checkToken(): any {
        return !!localStorage.getItem("auth_token");
    }
    public unauthorizedAccess(error: any): void {
        console.log(error);
        this.logout();
        this._router.navigate(["/auth/login"]);
    }

    public isLoggedIn(): boolean {
        // return tokenNotExpired('hims-token');

        return true;
    }
    isAuthenticated(): boolean {
        const token = this.getToken;
        if (token) {
            !this.jwtHelper.isTokenExpired(token);
            return true

        } else {
            this.logout();
        }
    }
    
      public getJWTValue(): any {
        const token = this.getToken;
        return this.jwtHelper.decodeToken(token);
    }
    private handleError(error: any) {
        let errorMessage: any = {};
        // Connection error
        if (error.status === 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: "Sorry, there was a connection error occurred. Please try again."
            };
        } else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
}
