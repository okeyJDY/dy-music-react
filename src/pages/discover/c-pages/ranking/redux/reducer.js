import { Map } from 'immutable';

import * as actionType from './constants';

const defaultState = Map({
  topList: [],
  playList: {},
  currentIndex: 0,
  spinning: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionType.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionType.CHANGE_SPINNING:
      return state.set("spinning", action.spinning);
    default:
      return state;
  }
}

export default reducer;