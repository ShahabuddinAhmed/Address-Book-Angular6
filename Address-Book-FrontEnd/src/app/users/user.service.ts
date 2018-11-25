import { Injectable } from '@angular/core';
import { Register } from '../users/models/register';
import { Http, Headers } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  register(_register: Register) {
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/register', _register, httpOptions);
  }
}
