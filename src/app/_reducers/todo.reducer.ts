import { ToDoActionType } from '../_shared/enums/todo-action-enum';
import { ActionParent } from '../_actions/todo.actions';
import { ToDo } from '../_models/todo';

export const initialState: ToDo[] = [
    { title: "Todo 1" },
    { title: "Todo 2" }
];

export function TodoReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case ToDoActionType.Add:
            return [...state, action.payload]
        case ToDoActionType.Remove:
            var currentState = [...state]
            currentState.splice(action.payload, 1)
            return currentState
        default: return state;
    }
}