import { Todo } from 'models/index';
import * as TodoActions from './export-todo.actions';

const initialState: Todo[] = [];

export function TodosReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
  switch (action.type) {
    case TodoActions.AddTodo: {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    }
    case TodoActions.POPULATE_TODOS: {
      return action.todos;
    }
    case TodoActions.TOGGLE_TODO: {
      return state.map(todo => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }else {
          return todo;
        }
      });
    }
    case TodoActions.DeleteTodo: {
      return state.filter(todo => action.payload.id !== todo.id );
    }
    case TodoActions.UpdateTodo: {
      return state.map(todo => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            text: action.payload.text
          };
        }else {
          return todo;
        }
      });
    }
    case TodoActions.CLEAR_COMPLETED_TODO: {
      return state.filter(todo => !todo.completed );
    }
    case TodoActions.COMPLETE_ALL_TODO: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => {
        return {
          ...todo,
          completed: !areAllMarked
        };
      });
    }
    default: {
      return state;
    }
  }
}
