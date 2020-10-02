import * as actionType from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from '@/services/songs';
import { handleSongCategory } from '@/utils/handle-data';

const changeCategoryAction = (categories) => ({
  type: actionType.CHANGE_CATEGORIES,
  categories
});

const changeSongsAction = (categorySongs) => ({
  type: actionType.CHANGE_CATEGOTY_SONGS,
  categorySongs
});

export const changeCurrentCategoryAction = (currentCategory) => ({
  type: actionType.CHANGE_CURRENT_CATEGORY,
  currentCategory
})

// thunk-action
export const getCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categories = handleSongCategory(res);
      dispatch(changeCategoryAction(categories));
    })
  }
};

export const getSongsAction = (page) => {
  return (dispatch, getState) => {
    const currentCategory = getState().getIn(["songs", "currentCategory"]);
    getSongCategoryList(currentCategory, page * 35).then(res => {
      dispatch(changeSongsAction(res));
    })
  }
}