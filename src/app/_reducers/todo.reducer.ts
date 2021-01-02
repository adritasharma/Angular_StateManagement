import {ToDoActionType} from '../_shared/enums/todo-action-enum';
import {ActionParent} from '../_actions/todo.actions';
import {ToDo} from '../_models/todo';

export const initialState:ToDo[] = [
    {title: "Todo 1"},
    {title: "Todo 2"}
];

export function TodoReducer(state = initialState, action:ActionParent){
    switch(action.type) {
        default : return state;
    }
}