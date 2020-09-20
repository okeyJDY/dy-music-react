import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/redux";
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/redux';

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer
})

export default reducer;