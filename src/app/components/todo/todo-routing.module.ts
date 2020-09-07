import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './../../guards/auth.guard'

import { TodoComponent } from "./todo.component";

const routes: Routes = [
  {path: "todo", component: TodoComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TODORoutingModule {}
