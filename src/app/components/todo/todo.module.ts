import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../../material.module';


import { TODORoutingModule } from './todo-routing.module'

import { TodoComponent } from  './todo.component';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TODORoutingModule
  ],
  exports:  [

  ]
})
export class TODOModule { }
