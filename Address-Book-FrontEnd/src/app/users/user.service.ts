import { Injectable } from '@angular/core';
import { Register } from '../users/models/register';
import { Users } from '../users/models/user';
import { AddressBook } from '../users/models/addressbook';
import { Book } from '../users/models/book';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from './models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  jwtHelper = new JwtHelperService();

  register(_register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/register', _register, httpOptions);
  }

  addressbook(_addressbook: AddressBook) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/addressbook/create', _addressbook, httpOptions);
  }

  editAddressBook(id: string, _addressbook: AddressBook) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(`http://localhost:3000/addressbook/update/${id}`, _addressbook, httpOptions);
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

  getAddressBook(id: string): Observable<AddressBook[]> {
    return this.http.get<AddressBook[]>(`http://localhost:3000/addressbook/${id}`);
  }

  setToken(auth: any) {
    localStorage.setItem('token', auth.token);
    localStorage.setItem('userID', auth.userID);

  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteAddress(id: string) {
    return this.http.delete(`http://localhost:3000/addressbook/delete/${id}`);
  }

  getOneAddressBook(id: string): Observable<AddressBook> {
    return this.http.get<AddressBook>(`http://localhost:3000/addressbook/getone/${id}`);
  }

  loggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.router.navigate(['/']);
  }

}
