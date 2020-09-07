import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../../material.module';

import { LogInRoutingModule } from './login-routing.module'

import { LoginComponent } from  './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LogInRoutingModule
  ],
  exports:  [

  ]
})
export class LogInModule { }
