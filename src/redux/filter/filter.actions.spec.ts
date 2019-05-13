import * as FilterActions from './export-filter.actions';

describe('Redux: FilterActions', () => {

  describe('Test for SetFilterAction', () => {

    it('should return an action with type an filter', () => {
      const action = new FilterActions.SetFilterAction('new filter');
      expect(action.type).toEqual(FilterActions.SetFilter);
      expect(action.payload).toEqual('new filter');
    });

  });

});
