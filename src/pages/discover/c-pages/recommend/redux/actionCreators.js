import * as actionType from "./constants";
import { getTopBanners } from "@/services/recommend";

// action
const changeTopBanners = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// react-thunk-action
export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      if (res.code === 200) {
        dispatch(changeTopBanners(res));
      }
    })
  }
}