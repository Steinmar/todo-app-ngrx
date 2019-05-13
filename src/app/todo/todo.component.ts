import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';
import { Todo } from 'models/Todo.model';
import * as TodoActions from './../../redux/todo/export-todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textInput') textInput: ElementRef;
  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe(state => {
      const action = new TodoActions.ToggleTodoAction(this.todo);
      this.store.dispatch(action);
    });
  }

  ngOnInit() {
    this.textField.setValue(this.todo.text);
    this.checkField.setValue(this.todo.completed, {emitEvent: false});
  }

  updateText() {
    if (this.textField.valid && this.editing) {
      const newText: string = this.textField.value;
      const action = new TodoActions.UpdateTodoAction({
        ...this.todo,
        text: newText.trim()
      });
      this.store.dispatch(action);
      this.editing = false;
    }
  }

  activeEditMode() {
    this.editing = true;
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }

  deleteTodo() {
    const action = new TodoActions.DeleteTodoAction(this.todo);
    this.store.dispatch(action);
  }

}
