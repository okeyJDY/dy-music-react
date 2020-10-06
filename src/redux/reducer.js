import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/redux";
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/redux';
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/redux';
import { reducer as djradioReducer } from '@/pages/discover/c-pages/djradio/redux';
import { reducer as artistReducer } from '@/pages/discover/c-pages/artist/redux';
import { reducer as albumReducer } from '@/pages/discover/c-pages/album/redux';

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
})

export default reducer;
