import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getHotAlbumAction, getTopAlbumAction } from './redux/actionCreators';

import DYBackTop from '@/components/back-top';
import DYHotAlbum from './c-cpns/hot-album';
import DYTopAlbum from './c-cpns/top-album';
import { AlbumWrapper } from './style';

export default memo(function DYAlbum() {

  // redux hook
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getHotAlbumAction());
    dispatch(getTopAlbumAction({}));
  }, [dispatch]);
  
  return (
    <AlbumWrapper className="wrap-v2">
      <DYHotAlbum />
      <DYTopAlbum />
      <DYBackTop />
    </AlbumWrapper>
  )
})
