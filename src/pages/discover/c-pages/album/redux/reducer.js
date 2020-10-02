import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionType.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums);
    case actionType.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.topTotal);
    default:
      return state;
  }
}

export default reducer;