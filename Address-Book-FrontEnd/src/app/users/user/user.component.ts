import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private _userService: UserService) { }
  public allUser: Users[];
  ngOnInit() {
    this.GetAllUser();
  }

  private GetAllUser() {
    this._userService.getAlluser().subscribe(data => {
      this.allUser = data;
      console.log(this.allUser);
    });
  }

}
