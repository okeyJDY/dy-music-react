import * as actionType from './constants';
import {
  getDjRadioCateList,
  getDjRecommendType,
  getDjRadioPrograms,
  getDjRadioProgramTopList
} from '@/services/djradio';

const changeCateListAction = (categories) => ({
  type: actionType.CHANGE_CATE_LIST,
  categories
});

const changeRecommendTypeAction = (djRadios) => ({
  type: actionType.CHANGE_RECOMMEND_TYPE,
  djRadios
})

const changeProgramsAction = (programs) => ({
  type: actionType.CHANGE_PROGRAMS,
  programs
});

const changeProgramTopListAction = (toplist) => ({
  type: actionType.CHANGE_PROGRAM_TOP_LIST,
  toplist
})


// thunk-action
export const getCateListAction = () => {
  return dispatch => {
    getDjRadioCateList().then(res => {
      dispatch(changeCateListAction(res.categories));
    })
  }
}

export const getDjRecommendTypeAction = (type) => {
  return dispatch => {
    getDjRecommendType(type).then(res => {
      dispatch(changeRecommendTypeAction(res.djRadios));
    })
  }
}

export const getProgramsAction = () => {
  return dispatch => {
    getDjRadioPrograms().then(res => {
      dispatch(changeProgramsAction(res.programs));
    })
  }
}

export const getProgramTopListAction = (limit = 10) => {
  return dispatch => {
    getDjRadioProgramTopList(limit).then(res => {
      dispatch(changeProgramTopListAction(res.toplist))
    })
  }
}