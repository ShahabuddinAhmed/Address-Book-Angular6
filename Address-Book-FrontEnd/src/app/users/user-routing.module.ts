import { EditAddressBookComponent } from './edit-address-book/edit-address-book.component';
import { CreateAddressBookComponent } from './create-address-book/create-address-book.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: EditProfileComponent },
  { path: 'addressbook', component: CreateAddressBookComponent },
  { path: 'addressbook/:id', component: EditAddressBookComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRoutingModule { }
