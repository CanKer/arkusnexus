import { TodoService } from './../services/todo.service'

export class TODO {
  _id?: any
  done?: boolean
  description?: string

  constructor(_id: any, done?: boolean, description?:string, private todoService?: TodoService) {
    this._id = _id
    this.done = done
    this.description = description
    this.todoService = todoService
  }

  save?()  {
    return this.todoService.add(this)
  }
  update?()  {}

  remove?()  {
    return this.todoService.remove(this._id)
  }
}
