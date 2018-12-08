import { Register } from './../models/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/user';
import { ComparePassword } from '../../share/compare-password.directive';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  hide = true;
  hide1 = true;
  public Register: FormGroup;
  public name: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public userID: string;
  register: Register;
  public user: Users;

  private createFormGroup(): void {
    this.Register = new  FormGroup( {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  private createFormControls(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(60)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      ComparePassword('password')
    ]);
  }

  constructor(private _userService: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getUserID();
    this.getUserInfo(this.userID);
  }

  private getUserID() {
    this.activeRoute.params.subscribe(param => {
      this.userID = param['id'];
      console.log(this.userID);
    });
  }

  getUserInfo(id: string) {
    this._userService.getUser(id).subscribe(data => {
      this.user = data;
      this.setFormControlvalue();
    },
    err => {
      console.log(err);
    }
    );
  }

  private setFormControlvalue() {
    this.name.setValue(this.user.userName);
    this.email.setValue(this.user.userEmail);
  }

  onSubmit() {
    this.register = new Register();
    this.register.userName = this.name.value;
    this.register.userEmail = this.email.value;
    this.register.userPassword = this.password.value;
    this._userService.updateUser(this.userID, this.register).subscribe(data => {
      this.router.navigate(['user']);
    });
  }
}
