import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  categories: [],
  categorySongs: {},
  currentCategory: "全部"
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CATEGORIES:
      return state.set("categories", action.categories);
    case actionType.CHANGE_CATEGOTY_SONGS:
      return state.set("categorySongs", action.categorySongs);
    case actionType.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    default:
      return state;
  }
}

export default reducer;