import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoReducer } from './_reducers/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/addTodo/addTodo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';


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
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
