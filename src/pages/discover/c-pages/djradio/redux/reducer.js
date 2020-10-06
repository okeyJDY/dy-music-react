import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  categories: []
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CATE_LIST:
      return state.set("categories", action.categories);
    default:
      return state;
  }
}

export default reducer;
