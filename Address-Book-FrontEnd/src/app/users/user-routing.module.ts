import { EditAddressBookComponent } from './edit-address-book/edit-address-book.component';
import { CreateAddressBookComponent } from './create-address-book/create-address-book.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CheckGuardGuard } from '../auth/check-guard.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [CheckGuardGuard] },
  { path: 'login', component: LoginComponent, canActivate: [CheckGuardGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: EditProfileComponent, canActivate: [AuthGuard]  },
  { path: 'addressbook', component: CreateAddressBookComponent, canActivate: [AuthGuard] },
  { path: 'addressbook/:id', component: EditAddressBookComponent, canActivate: [AuthGuard] }
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
