import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  currentArea: -1,
  currentType: {
    name: "推荐歌手",
    type: 1,
    url:"/discover/artist"
  }
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case actionType.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    default:
      return state;
  }
}

export default reducer;