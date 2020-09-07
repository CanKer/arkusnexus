import { AuthService } from './../services/auth.service'

export class User {
  _id?: any
  email: string
  password: string
  //auth: AuthService
  constructor(email:string, password:string, private auth?:AuthService) {
    this.email = email
    this.password = password
    this.auth = auth
  }
  save()  {
    return this.auth.register(this)
  }

  logIn() {
    return this.auth.logIn(this)
  }
}
