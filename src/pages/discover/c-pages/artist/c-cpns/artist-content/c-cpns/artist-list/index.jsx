import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import classnames from 'classnames';
import { getSizeImage } from '@/utils/format-utils';

import {
  ArtistListWrapper,
  ImageCover
} from './style';

export default memo(function DYArtistList() {
  // redux hook
  const { artists } = useSelector(state => ({
    artists: state.getIn(["artist", "artists"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      {
        artists && artists.map((item, index) => {
          if (index < 10) {
            return (
              <ImageCover key={item.id} className="image-info">
                <div className="artist-image">
                  <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
                  <a href="/todo" className="cover sprite_cover">
                    {item.name}
                  </a>
                </div>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <i className={classnames("sprite_icon2", {"icon": !item.alias.length})}></i>
                </div>
              </ImageCover>
            )
          }
          return (
            <div key={item.id} className="name-info">
              <span className="name">{item.name}</span>
              <i className={classnames("sprite_icon2", {"icon": !item.alias.length})}></i>
            </div>
          )
        })
      }
    </ArtistListWrapper>
  )
})
