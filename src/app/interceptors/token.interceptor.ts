import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from "./../services/auth.service";
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor: ", this.auth.getToken())
    let tokenizeReq = request.clone({
      setHeaders: { Authorization: `Bearer ${this.auth.getToken()}`}
    })
    return next.handle(tokenizeReq);
  }
}
