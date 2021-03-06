import { Action } from '@ngrx/store';
import { Todo } from 'models/Todo.model';

import * as GeneratedToDoActions from '../generated/actions/todo.actions';

export const TOGGLE_TODO = '[TODO] toggle';
export const POPULATE_TODOS  = '[TODO] populate';
export const CLEAR_COMPLETED_TODO = '[TODO] clear completed';
export const COMPLETE_ALL_TODO = '[TODO] complete all';

// custom updated add todo action
export class AddTodoAction extends GeneratedToDoActions.AddTodoAction implements Action {

  constructor(
    payload: Todo
  ) {
    super(payload);
    this.payload.id = Math.random();
  }
}

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor(
    public todos: Todo[]
  ) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public payload: Todo
  ) {}
}

export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export class CompletedAllAction implements Action {
  readonly type = COMPLETE_ALL_TODO;
}

export * from '../generated/actions/todo.actions';
export type TodoActionType =
| GeneratedToDoActions.TodoActionType
| AddTodoAction
| PopulateTodosAction
| ToggleTodoAction
| ClearCompletedAction
| CompletedAllAction;
