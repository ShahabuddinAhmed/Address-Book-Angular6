import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBook } from '../models/addressbook';
import { UserService } from '../user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  jwtHelper = new JwtHelperService();
  @ViewChild('content') Content: ElementRef;

  constructor(private activeRoute: ActivatedRoute, private _userService: UserService, private router: Router) { }

  public allAddressBook: AddressBook[];
  public userID: string;

  ngOnInit() {
    this.getUserID();
    this.GetAddressBook(this.userID);
  }

  private getUserID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    this.userID = tokenPayload.userID;
  }

  private GetAddressBook(id) {
    this._userService.getAddressBook(id).subscribe(data => {
      this.allAddressBook = data;
      console.log(this.allAddressBook);
    },
    err => {
      console.log(err);
    }
      );
  }

  deleteAddress(id: string) {
    this._userService.deleteAddress(id)
    .subscribe(
      data => {
        console.log(data);
      this.GetAddressBook(this.userID);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateAddress(id: string) {
    this.router.navigate([`/addressbook/${id}`]);
  }

  downloadPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    const content  = this.Content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': '190',
      'elementHandlers': specialElementHandlers
    });

    doc.save('contact.pdf');
  }

}
