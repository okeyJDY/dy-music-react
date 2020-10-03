import * as actionType from './constants';

export const changeCurrentAreaAction = (currentArea) => ({
  type: actionType.CHANGE_CURRENT_AREA,
  currentArea
});

export const changeCurrentTypeAction = (currentType) => ({
  type: actionType.CHANGE_CURRENT_TYPE,
  currentType
})