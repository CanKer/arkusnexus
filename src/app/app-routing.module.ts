import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './guards/auth.guard'

import { MainComponent } from './pages/main/main.component'

// import { TodoComponent } from "./components/todo/todo.component";

const routes: Routes = [
  {path:  "", component: MainComponent},
  {path:  "**", redirectTo: "/", pathMatch: 'full'},
  // {path:  "login", component: LoginComponent},
  // {path:  "register", component: LoginComponent},
  // {path: "todo", component: TodoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
