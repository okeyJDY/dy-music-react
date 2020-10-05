import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
  currentArea: 7,
  currentType: {
    name: "华语男歌手",
    type: 1,
    url:"/discover/artist"
  },
  artists: [],
  topArtists: []
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case actionType.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case actionType.CHANGE_ARTIST_LIST:
      return state.set("artists", action.artists);
    case actionType.CHANGE_TOP_ARTISTS:
      return state.set("topArtists", action.topArtists);
    default:
      return state;
  }
}

export default reducer;