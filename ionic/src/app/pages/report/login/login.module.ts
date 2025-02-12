import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginPage } from './login.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ]
})
export class LoginPageModule {}
