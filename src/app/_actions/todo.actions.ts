import {Action} from '@ngrx/store';
import {ToDoActionType} from '../_shared/enums/todo-action-enum';

export class ActionParent implements Action{
    type:any;
    payload:any;
}

export class TodoAdd implements ActionParent {
    type: ToDoActionType;
    constructor(public payload: any) {};
}