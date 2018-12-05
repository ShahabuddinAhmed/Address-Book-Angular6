import { AddressBook } from './../models/addressbook';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-address-book',
  templateUrl: './edit-address-book.component.html',
  styleUrls: ['./edit-address-book.component.css']
})
export class EditAddressBookComponent implements OnInit {
  public AddressBook: FormGroup;
  public fullName: FormControl;
  public nickName: FormControl;
  public phone1: FormControl;
  public phone2: FormControl;
  public address: FormControl;
  public website: FormControl;
  public email: FormControl;
  public birthday: FormControl;
  addressBook: AddressBook;
  public userID: string;
  public AddressBookID: string;
  public storeAddressBook: AddressBook;

  private createFormGroup(): void {
    this.AddressBook = new  FormGroup( {
      fullName: this.fullName,
      nickName: this.nickName,
      phone1: this.phone1,
      phone2: this.phone2,
      address: this.address,
      website: this.website,
      email: this.email,
      birthday: this.birthday
    });
  }

  private createFormControls(): void {
    this.fullName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.nickName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.phone1 = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.phone2 = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.website = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(60)
    ]);
    this.birthday = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
  }

  constructor(private _userService: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getAddressBookID();
    this.getUserID();
    this.GetOneAddressBook(this.AddressBookID);

  }

  private getUserID() {
    this.userID = localStorage.getItem('userID');
    console.log(this.userID);
  }

  private getAddressBookID() {
    this.activeRoute.params.subscribe(param => {
      this.AddressBookID = param['id'];
      console.log(this.AddressBookID);
    });
  }

  private GetOneAddressBook(id: string) {
    this._userService.getOneAddressBook(id).subscribe((data: AddressBook) => {
      console.log(data);
      this.storeAddressBook = data;
      this.setFormControlvalue();
    });
  }

  private setFormControlvalue() {
    this.fullName.setValue(this.storeAddressBook.fullName);
    this.nickName.setValue(this.storeAddressBook.nickName);
    this.phone1.setValue(this.storeAddressBook.phone1);
    this.phone2.setValue(this.storeAddressBook.phone2);
    this.address.setValue(this.storeAddressBook.address);
    this.website.setValue(this.storeAddressBook.website);
    this.email.setValue(this.storeAddressBook.email);
    this.birthday.setValue(this.storeAddressBook.birthday);
  }


  onSubmit() {
    // this.addressBook.fullName = this.fullName.value;
    // this.addressBook.nickName = this.nickName.value;
    // this.addressBook.phone1 = this.phone1.value;
    // this.addressBook.phone2 = this.phone2.value;
    // this.addressBook.address = this.address.value;
    // this.addressBook.website = this.website.value;
    // this.addressBook.email = this.email.value;
    // this.addressBook.birthday = this.birthday.value;
    // this._userService.addressbook(this.addressBook)
    // .subscribe(data => {
    //     console.log(data);
    //     this.router.navigate(['/user']);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    //   );

    this.addressBook = new AddressBook();
    this.addressBook.fullName = this.fullName.value;
    this.addressBook.nickName = this.nickName.value;
    this.addressBook.phone1 = this.phone1.value;
    this.addressBook.phone2 = this.phone2.value;
    this.addressBook.address = this.address.value;
    this.addressBook.website = this.website.value;
    this.addressBook.email = this.email.value;
    this.addressBook.birthday = this.birthday.value;
    this.addressBook.usersID = this.userID;
    this._userService.editAddressBook(this.AddressBookID, this.addressBook)
    .subscribe(data => {
        console.log(data);
        this.router.navigate(['/user']);
      },
      error => {
        console.error(error);
      }
      );
  }

}
