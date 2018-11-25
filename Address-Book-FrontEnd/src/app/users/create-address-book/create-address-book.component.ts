import { AddressBook } from './../models/addressbook';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-address-book',
  templateUrl: './create-address-book.component.html',
  styleUrls: ['./create-address-book.component.css']
})
export class CreateAddressBookComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  onSubmit() {
    this.addressBook = new AddressBook();
    this.addressBook.fullName = this.fullName.value;
    this.addressBook.nickName = this.nickName.value;
    this.addressBook.phone1 = this.phone1.value;
    this.addressBook.phone2 = this.phone2.value;
    this.addressBook.address = this.address.value;
    this.addressBook.website = this.website.value;
    this.addressBook.email = this.email.value;
    this.addressBook.birthday = this.birthday.value;
    console.log(this.addressBook.fullName);
    console.log(this.addressBook.nickName);
    console.log(this.addressBook.phone1);
    console.log(this.addressBook.phone2);
    console.log(this.addressBook.address);
    console.log(this.addressBook.website);
    console.log(this.addressBook.email);
    console.log(this.addressBook.birthday);
  }

}
