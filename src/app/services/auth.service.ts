import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from './../classes/User'

import {Observable, BehaviorSubject, of} from 'rxjs'
import { tap, map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:9000/api/v1/'
  isAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  register(user:User)  {
    console.log("register()", `${this.url}user`, user)
    const { email, password } = user
    return this.http.post(`${this.url}user/register`, {email, password})
  }

  logIn(user: User) {
    console.log("userrr: ", user)
    const { email, password } = user
    console.log("url:  ", `${this.url}auth`)
    return this.http.post(`${this.url}auth`, {email, password})
  }

  logOut()  {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
    this.isAuthenticated.next(false)
  }

  getToken()  {
    return localStorage.getItem('token')
  }

  verifyToken(): Observable<boolean> {
    return this.http.get(`${this.url}auth/verify`)
      .pipe(
        tap((resp:any) => (console.log("resp: ", resp),localStorage.setItem('token', resp.token))),
        map( res => {this.isAuthenticated.next(true);
          return true}),
        catchError(() => {
          this.isAuthenticated.next(false);
          return of(false)})
      )
  }
}
