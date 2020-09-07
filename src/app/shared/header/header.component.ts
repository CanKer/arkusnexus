import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    console.log("chepo", this.isAuthenticated$)
    this.isAuthenticated$ = this.auth.isAuthenticated
    this.isAuthenticated$
      .subscribe(data => console.log("data: ", data))
  }

  logout()  {
    this.auth.logOut()
  }

}
