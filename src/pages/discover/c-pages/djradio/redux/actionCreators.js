import * as actionType from './constants';
import { getDjRadioCateList } from '@/services/djradio';

const changeCateListAction = (categories) => ({
  type: actionType.CHANGE_CATE_LIST,
  categories
});


// thunk-action
export const getCateListAction = () => {
  return dispatch => {
    getDjRadioCateList().then(res => {
      dispatch(changeCateListAction(res.categories));
    })
  }
}