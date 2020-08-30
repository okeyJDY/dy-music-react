import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumCoverWrapper } from './style';

const DYAlbumCover = memo((props) => {
  // props and state
  const { info, size = 100, width = 118, bgp = -570 } = props;

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
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
  info: PropTypes.object
}

DYAlbumCover.defaultProps = {
  info: {}
}

export default DYAlbumCover
