import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  userSignIn(user: User): Observable<string> {
    return this.http.post('http://localhost:8081/register', user, {
      responseType: 'text',
    });
  }
  userLogIn(user: User): Observable<string> {
    return this.http.post('http://localhost:8081/authenticate', user, {
      responseType: 'text',
    });
  }
}
