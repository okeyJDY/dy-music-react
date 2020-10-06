import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getTopArtistListAction } from '../../../../redux/actionCreators';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import { SettleArtistWrapper, RightSlot } from './style';

export default memo(function DYSettleArtist() {

  // redux hook
  const dispatch = useDispatch();
  const { topArtists } = useSelector(state => ({
    topArtists: state.getIn(["artist", "topArtists"])
  }), shallowEqual);

  // other hook
  useEffect(() => {
    dispatch(getTopArtistListAction(10));
  }, [dispatch]);

  // jsx code
  const rightSlot = (
    <RightSlot>更多 &gt;</RightSlot>
  );
  
  return (
    <SettleArtistWrapper>
      <DYThemeHeaderNormal title="入驻歌手" rightSlot={rightSlot} />
      <div className="artist-list">
        {
          topArtists.map((item, index) => {
            return (
              <div key={item.id} className="artist-item">
                <div className="artist-image">
                  <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
                  <a href="/todo" className="cover sprite_cover">
                    {item.name}
                  </a>
                </div>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <i className="icon sprite_icon2"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </SettleArtistWrapper>
  )
})
