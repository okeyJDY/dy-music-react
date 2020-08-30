import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums
} from "@/services/recommend";

// change-action
const changeTopBannerAction = topBanners => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners
})

const changeHotRecommendAction = hotRecommends => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends
})

const changeNewAblumAction = newAlbums => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  newAlbums
})

/**
 * react-thunk-action
 */
// topBannerAction
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res.banners));
    })
  }
}
// hotRecommendAction
export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res.result));
    })
  }
}
// newAblumAction
export const getNewAblumAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAblumAction(res.albums));
    })
  }
}

