import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { AuthService } from "./../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
   private auth: AuthService,
   private router: Router
 ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log("paso por el canActivate guard")
      return  this.auth.verifyToken()
                .pipe(
                  tap( isAuth => {
                    if(!isAuth) {
                      return this.router.navigateByUrl('/')
                    } else return true
                    })
                )
  }

}
