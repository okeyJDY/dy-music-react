import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList
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

const changeUpRankingAction = upRanking => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking
})

const changeNewRanking = newRanking => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking
})

const changeOriginRanking = originRanking => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking
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
// topListAction
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewRanking(res.playlist));
          break;
        case 2:
          dispatch(changeOriginRanking(res.playlist));
          break;
        case 3:
          dispatch(changeUpRankingAction(res.playlist));
          break;
        default:
      }
    })
  }
}

