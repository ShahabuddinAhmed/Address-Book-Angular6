import { Injectable } from '@angular/core';
import { Register } from '../users/models/register';
import { Users } from '../users/models/user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(_register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/register', _register, httpOptions);
  }

  login(_login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/login', _login, httpOptions);
  }

  getAlluser(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/user/');
  }

  getToken(token: any) {
    return localStorage.getItem('token');
  }

}
