import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveTodo } from 'src/app/_actions/todo.actions';
import { ToDo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //todos:Observable<ToDo[]>
  todos:ToDo[]

  constructor(private store: Store<{todos:ToDo[]}>) {
    //'todos' app.module for root obj property name
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values
    })
   }

  ngOnInit() {
  }

  removeTodo(index:number) {
     this.store.dispatch(new RemoveTodo(index));
  }

}
