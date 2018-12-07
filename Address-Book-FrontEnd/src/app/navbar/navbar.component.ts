import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getID();
  }

  loggedOut() {
    this._userService.loggedOut();
  }
  getID() {
    return localStorage.getItem('userID');
  }

}
