import React, { memo } from 'react';

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongCoverWrapper } from './style';

export default memo(function DYSongCover(props) {
  // props and state
  const { info } = props;

  return (
    <SongCoverWrapper className="song-cover">
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="erji sprite_icon"></i>
              {getCount(info.playCount)}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongCoverWrapper>
  )
})
