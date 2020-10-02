import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/redux";
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/redux';
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/redux';
import { reducer as albumReducer } from '@/pages/discover/c-pages/album/redux';

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  album: albumReducer,
})

export default reducer;