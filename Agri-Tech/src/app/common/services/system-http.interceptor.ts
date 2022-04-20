import { Router } from '@angular/router';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class SystemHttpInterceptor implements HttpInterceptor {
  constructor(private _router: Router, public toastrService: ToastrService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // console.log(event)
        // if (event.body.response.response_status.response_code === 401 || 
        //   event.body.response.response_status.response_description === 'Invalid token') {
        //   this.toastrService.error('logging Out...', 'Your session has expired');
        //   this._router.navigate(['/home']);
        // }
      }
    }, (err: any) => {
      // console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.toastrService.error('logged Out', 'Your session has expired');
          this._router.navigate(['/auth/login']);
        }
      }
    });
  }
}
