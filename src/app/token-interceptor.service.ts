import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authoservice = this.injector.get(AuthService)
    let tokeninzedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authoservice.getToken()}`
      }
    });
    return next.handle(tokeninzedReq);
  }
}
