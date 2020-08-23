import { Map } from "immutable";

import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends)
    default:
      return state
  }
}

export default reducer;
