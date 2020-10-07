import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  categories: [],
  programs: [],
  toplist: [],
  djRadios: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CATE_LIST:
      return state.set("categories", action.categories);
    case actionType.CHANGE_PROGRAMS:
      return state.set("programs", action.programs);
    case actionType.CHANGE_PROGRAM_TOP_LIST:
      return state.set("toplist", action.toplist);
    case actionType.CHANGE_RECOMMEND_TYPE:
      return state.set("djRadios", action.djRadios);
    default:
      return state;
  }
}

export default reducer;
