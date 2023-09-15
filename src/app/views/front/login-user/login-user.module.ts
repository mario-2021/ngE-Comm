import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginUserRoutingModule } from './login-user-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    LoginUserRoutingModule,
    FormsModule
  ]
})
export class LoginUserModule { }
