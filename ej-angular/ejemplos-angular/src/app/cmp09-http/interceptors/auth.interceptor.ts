import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/cmp07-servicios/servicios/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.authService.hasToken()){
      const token = this.authService.getToken()
      const headersConAuth = request.headers.append('Authorization', token!)
      const reqConAuth = request.clone({headers: headersConAuth})
      return next.handle(reqConAuth)
    }
    return next.handle(request);
  }
}