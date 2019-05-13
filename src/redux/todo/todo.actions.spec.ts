import * as TodoActions from './export-todo.actions';

describe('Redux: TodoActions', () => {

  describe('Test for AddTodoAction', () => {

    it('should return an action with random id', () => {
      const action = new TodoActions.AddTodoAction({
        id: null,
        text: 'new todo',
        completed: false
      });
      expect(action.type).toEqual(TodoActions.AddTodo);
      expect(action.payload.id).toBeGreaterThan(0);
    });

  });

  describe('Test for PopulateTodosAction', () => {

    it('should return an action with todos', () => {
      const action = new TodoActions.PopulateTodosAction([]);
      expect(action.type).toEqual(TodoActions.POPULATE_TODOS);
      expect(action.todos).toEqual([]);
    });

  });

  describe('Test for DeleteTodoAction', () => {

    it('should return an action with an id', () => {
      const action = new TodoActions.DeleteTodoAction({
        id: 1,
        text: '',
        completed: false
      });
      expect(action.type).toEqual(TodoActions.DeleteTodo);
      expect(action.payload.id).toEqual(1);
    });

  });

  describe('Test for ToggleAction', () => {

    it('should return an action with an id', () => {
      const action = new TodoActions.ToggleTodoAction({
        id: 1,
        text: '',
        completed: false
      });
      expect(action.type).toEqual(TodoActions.TOGGLE_TODO);
      expect(action.payload.id).toEqual(1);
    });

  });

  describe('Test for UpdateAction', () => {

    it('should return an action with an id and text', () => {
      const action = new TodoActions.UpdateTodoAction({
        id: 1,
        text: 'new text',
        completed: false
      });
      expect(action.type).toEqual(TodoActions.UpdateTodo);
      expect(action.payload.id).toEqual(1);
      expect(action.payload.text).toEqual('new text');
    });

  });

  describe('Test for ClearCompletedAction', () => {

    it('should return an action the right type', () => {
      const action = new TodoActions.ClearCompletedAction();
      expect(action.type).toEqual(TodoActions.CLEAR_COMPLETED_TODO);
    });

  });

  describe('Test for CompletedAllAction', () => {

    it('should return an action the right type', () => {
      const action = new TodoActions.CompletedAllAction();
      expect(action.type).toEqual(TodoActions.COMPLETE_ALL_TODO);
    });

  });

});
