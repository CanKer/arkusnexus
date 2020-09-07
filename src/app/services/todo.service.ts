import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TODO } from './../classes/TODO'

import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = environment.baseUrl
  constructor(private http:HttpClient) { }

  getAll()  {
    return this.http.get(`${this.url}todo`)
  }

  remove(id: string) {
    console.log("id: ", `${this.url}todo/${id}`)
    return this.http.delete(`${this.url}todo/${id}`)
  }

  add(todo: TODO) {
    const { description } = todo
    console.log("add: ", `${this.url}todo/`, todo)
    return this.http.post(`${this.url}todo/`, { description })
  }
}
