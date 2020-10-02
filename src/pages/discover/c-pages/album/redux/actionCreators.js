import * as actionType from './constants';
import { getHotAlbums, getTopAlbums } from '@/services/album';

const changeHotAlbumAction = (hotAlbums) => ({
  type: actionType.CHANGE_HOT_ALBUMS,
  hotAlbums
});

const changeTopAlbumAction = (topAlbums) => ({
  type: actionType.CHANGE_TOP_ALBUMS,
  topAlbums
});

const changeTopTotalAction = (topTotal) => ({
  type: actionType.CHANGE_TOP_TOTAL,
  topTotal
})

// thunk-action
export const getHotAlbumAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumAction(res.albums));
    })
  }
}

// area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
export const getTopAlbumAction = ({limit = 35, page = 0, area = "ALL"}) => {
  return dispatch => {
    const offset = page * limit
    getTopAlbums({limit, offset, area}).then(res => {
      dispatch(changeTopAlbumAction(res.albums));
      dispatch(changeTopTotalAction(res.total));
    })
  }
}