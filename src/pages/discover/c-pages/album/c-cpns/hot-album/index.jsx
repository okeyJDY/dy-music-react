import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { albumPlayStyle } from '@/public/local-data';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import DYAlbumCover from '@/components/album-cover';
import { HotAlbumWrapper } from './style';

export default memo(function DYHotAlbum() {

  // redux hook
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual);

  // other handle
  const hotAlbumList = (hotAlbums && hotAlbums.slice(0, 10)) || [];
  return (
    <HotAlbumWrapper>
      <DYThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbumList.map((item, index) => {
            return <DYAlbumCover key={item.id} info={item} playStyle={albumPlayStyle}
                                 size={130}  width={153} bgp={-845} />
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
