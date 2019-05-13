
import * as FilterActions from './export-filter.actions';


export function FilterReducer(state: string = 'SHOW_ALL', action: FilterActions.SetFilterAction) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case FilterActions.SetFilter: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
