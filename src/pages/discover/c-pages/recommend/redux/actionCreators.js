import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends
} from "@/services/recommend";

// action
const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

// react-thunk-action
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      if (res.code === 200) {
        dispatch(changeTopBannerAction(res));
      }
    })
  }
}

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}