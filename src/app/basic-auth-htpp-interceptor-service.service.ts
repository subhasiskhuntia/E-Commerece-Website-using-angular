import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
// import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('userName') && sessionStorage.getItem('token')) {
      let token:string=sessionStorage.getItem("token")+"";
      req = req.clone({
        headers: new HttpHeaders()
          .set('Authorization',token)
      
      })
    }

    return next.handle(req);
  }
}
