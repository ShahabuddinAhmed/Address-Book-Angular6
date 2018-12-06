import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckGuardGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this._userService.loggedIn()) {
      this.router.navigate(['/user']);
    } else {
      return true;
    }
  }
}
