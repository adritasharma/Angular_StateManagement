import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAdd } from 'src/app/_actions/todo.actions';
import { ToDo } from 'src/app/_models/todo';
import { ToDoActionType } from 'src/app/_shared/enums/todo-action-enum';

@Component({
  selector: 'app-addTodo',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<{todos:ToDo[]}>) {
  }

  ngOnInit() {
  }

  addTodo(todo:string) {
    const newTodo = new ToDo();
    newTodo.title = todo;

    this.store.dispatch( new TodoAdd(newTodo));
  }

}
