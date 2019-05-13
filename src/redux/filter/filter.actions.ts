import { Action } from '@ngrx/store';

export const SetFilter  = '[SET] filter';

export class SetFilterAction implements Action {
  readonly type = SetFilter;

  constructor(
    public payload: string
  ) {}
}

export type FilterActionType = SetFilterAction;
