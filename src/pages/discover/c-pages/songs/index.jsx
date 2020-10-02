import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  getCategoryAction,
  getSongsAction
} from './redux/actionCreators';

import DYBackTop from '@/components/back-top';
import DYSongsHeader from './c-pages/songs-header';
import DYSongsList from './c-pages/songs-list';
import { SongsWrapper } from './style';

export default memo(function DYSongs() {

  // redux hook
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getSongsAction(0));
  }, [dispatch]);

  return (
    <SongsWrapper className="wrap-v2">
      <DYSongsHeader />
      <DYSongsList />
      <DYBackTop />
    </SongsWrapper>
  )
})