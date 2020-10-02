import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumCoverWrapper } from './style';

const DYAlbumCover = memo((props) => {
  // props and state
  const { info, size = 100, width = 118, bgp = -570, playStyle } = props;

  return (
    <AlbumCoverWrapper className="album-cover" size={size} width={width} bgp={bgp} playStyle={playStyle}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todp" className="cover image_cover">
          {info.name}
          <i className="play sprite_icon"></i>
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})

DYAlbumCover.proptypes = {
  info: PropTypes.object,
  playStyle: PropTypes.object
}

DYAlbumCover.defaultProps = {
  info: {},
  playStyle: {
    bgp: -85,
    left: 72,
    width: 22,
    hBgp: -110
  }
}

export default DYAlbumCover
