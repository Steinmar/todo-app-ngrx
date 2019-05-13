import { Action } from '@ngrx/store';
import { Todo } from 'models/Todo.model';

export const AddTodo    = '[TODO] add';
export const DeleteTodo = '[TODO] delete';
export const TOGGLE_TODO = '[TODO] toggle';
export const UpdateTodo = '[TODO] update';
export const POPULATE_TODOS  = '[TODO] populate';
export const CLEAR_COMPLETED_TODO = '[TODO] clear completed';
export const COMPLETE_ALL_TODO = '[TODO] complete all';

export class AddTodoAction implements Action {
  readonly type = AddTodo;

  constructor(
    public payload: Todo
  ) {
    this.payload.id = Math.random();
  }
}

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor(
    public todos: Todo[]
  ) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DeleteTodo;

  constructor(
    public payload: Todo
  ) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public payload: Todo
  ) {}
}

export class UpdateTodoAction implements Action {
  readonly type = UpdateTodo;

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

export type TodoActionType =
AddTodoAction |
PopulateTodosAction |
ToggleTodoAction |
DeleteTodoAction |
UpdateTodoAction |
ClearCompletedAction |
CompletedAllAction;
