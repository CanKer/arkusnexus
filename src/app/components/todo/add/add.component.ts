import { Component, OnInit, ViewChild } from '@angular/core';

import { TODO } from './../../../classes/TODO'
import { TodoService } from './../../../services/todo.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('form') form:any
  @ViewChild('description') description:any
  //description: string

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {}

  onSubmit()  {
    const { description } = this.form.form.value
    console.log("submit: ", description)

    if(!this.form.invalid) {
      const todo = new TODO(null, null, description, this.todoService)
      todo.save()
        .subscribe(
          () => {
            console.log("se agregó")
          },
          (error) =>  {

          }
        )
    }
  }

}
