import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'


import { User } from './../../classes/User'
import { AuthService } from './../../services/auth.service'
import { SnackService } from './../../services/snack.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginInvalid: boolean = false
  regLogIn: boolean
  title: string
  formData:FormGroup
  password: string

  constructor(
      private auth: AuthService,
      private snack: SnackService,
      private router: Router
    ) {}

  async ngOnInit() {
    this.initForm()
    this.checkRoute()
  }

  initForm()  {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$")]),
    })
  }

  checkRoute()  {
    if(this.router.url.split("/")[1] === "register")
      (this.regLogIn = true, this.title = "Register")
    if(this.router.url.split("/")[1] === "login")
      (this.title = "Log In", this.regLogIn = false)
  }

  onSubmit() {
    if(this.regLogIn) this.register()
    else this.logIn()
  }

  register()  {
    if(this.formData.invalid) this.loginInvalid = true
    else {
    const { email, password } = this.formData.value
    const user = new User(email,password, this.auth)
    user.save()
      .subscribe(
        ({data: token}:any) => {
          console.log("TOKEN: ", token)
          localStorage.setItem('token', token)
          this.router.navigate(['todo'])
        },
        error => (console.log("error: ", error),this.snack.openSnackBar(error.name, error.statusText)),
        () => console.log("yei")
      )
    }
  }

  logIn() {
    const { email, password } = this.formData.value
    const user = new User(email,password, this.auth)
    user.logIn()
      .subscribe(
        ({data: token}:any) => {
          console.log("TOKEN: ", token)
          localStorage.setItem('token', token)
          this.router.navigate(['todo'])
        },
        ({name,statusText}:any) => (console.log("error: ", name),this.snack.openSnackBar(name, statusText)),
        () => console.log("finally kurwa!!")
      )
  }


}
