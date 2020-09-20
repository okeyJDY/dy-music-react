import * as actionType from './constants';

import {
  getTopList,
  getPlayList
} from '@/services/ranking';

// change-action
const changeTopListAction = topList => ({
  type: actionType.CHANGE_TOP_LIST,
  topList
});

const changePlayListAction = playList => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList
});

const changeSpinningAction = spinning => ({
  type: actionType.CHANGE_SPINNING,
  spinning
});

export const changeCurrentIndex = index => ({
  type: actionType.CHANGE_CURRENT_INDEX,
  currentIndex: index
});


// thunk-action
export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res.list));
    })
  }
}

export const getPlayListgAction = id => {
  return dispatch => {
    dispatch(changeSpinningAction(true));
    getPlayList(id).then(res => {
      dispatch(changeSpinningAction(false));
      dispatch(changePlayListAction(res.playlist));
    })
  }
}