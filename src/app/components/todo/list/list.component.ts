import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../../services/todo.service'
import { TODO } from './../../../classes/TODO'

import { SnackService } from './../../../services/snack.service'

import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataSource$: BehaviorSubject<TODO[]> = new BehaviorSubject<TODO[]>([])
  displayedColumns: string[] = ['_id', 'done', 'description', 'actions'];

  constructor(private todoService: TodoService, private snack: SnackService) {}

  ngOnInit(): void {
    this.getTODOList()
  }

  delete(element:TODO) {
    const {_id, description, done } = element
    const todo = new TODO(_id, done, description, this.todoService)

    todo.remove()
      .subscribe(
        () => {
        const newValues = this.dataSource$.value.filter(v => (v._id !== element._id))
        this.dataSource$.next(newValues)
        this.snack.openSnackBar("Deleted", "Success")
        },
        (error: any) => (console.log("ERROR: ", error), this.snack.openSnackBar(error.name, error.statusText)),
      )

  }

  getTODOList() {
    this.todoService.getAll()
      .subscribe(
        (data:TODO[]) => (this.dataSource$.next(data)) ,
        error => (console.log("ERROR: ", error), this.snack.openSnackBar(error.name, error.statusText)),
      )
  }

  updateTODO()  {

  }


}
