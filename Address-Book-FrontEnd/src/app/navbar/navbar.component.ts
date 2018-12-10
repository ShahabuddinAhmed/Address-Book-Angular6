import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  jwtHelper = new JwtHelperService();
  public userID: string;
  public userName: string;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getID();
    this.getName();
  }

  loggedOut() {
    this._userService.loggedOut();
  }
  getID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return this.userID = tokenPayload.userID;
  }

  getName() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return this.userName = tokenPayload.userName;
  }

}
