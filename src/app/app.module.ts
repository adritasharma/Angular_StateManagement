import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoReducer } from './_reducers/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/addTodo/addTodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos:TodoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
