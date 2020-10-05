import * as actionType from './constants';

import { getArtistList, getTopArtistList } from '@/services/artist';

const changeArtistListAction = (artists) => ({
  type: actionType.CHANGE_ARTIST_LIST,
  artists
});

const changeTopArtistsAction = (topArtists) => ({
  type: actionType.CHANGE_TOP_ARTISTS,
  topArtists
});

export const changeCurrentAreaAction = (currentArea) => ({
  type: actionType.CHANGE_CURRENT_AREA,
  currentArea
});

export const changeCurrentTypeAction = (currentType) => ({
  type: actionType.CHANGE_CURRENT_TYPE,
  currentType
});

// thunk-action
export const getArtistListAction = (initial) => {
  return (dispatch, getState) => {
    const area = getState().getIn(["artist", "currentArea"]);
    const type = getState().getIn(["artist", "currentType"]).type;
    getArtistList({area, type, initial}).then(res => {
      dispatch(changeArtistListAction(res.artists));
    })
  }
}

export const getTopArtistListAction = (limit) => {
  return dispatch => {
    getTopArtistList(limit).then(res => {


      
    })
  }
}