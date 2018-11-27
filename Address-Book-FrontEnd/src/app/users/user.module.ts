import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateAddressBookComponent } from './create-address-book/create-address-book.component';
import { EditAddressBookComponent } from './edit-address-book/edit-address-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRippleModule } from '@angular/material';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule,  MatTooltipModule} from '@angular/material';
import { MatListModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    EditProfileComponent,
    CreateAddressBookComponent,
    EditAddressBookComponent
  ]
})
export class UserModule { }
