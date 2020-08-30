import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import { getNewAblumAction } from '../../redux/actionCreators';

import { Carousel } from 'antd';
import DYThemeHeaderRCM from '@/components/theme-header-rcm';
import DYAlbumCover from '@/components/album-cover';

import { NewAlbumWrapper } from './style';

export default memo(function DYNewAlbum() {

  // props and state

  // redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);

  // other hook
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAblumAction());
  }, [dispatch]);

  // other handle

  // function handle

  return (
    <NewAlbumWrapper>
      <DYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (
                          <DYAlbumCover key={iten.id}
                                        info={iten}
                                        size={100}
                                        width={118}
                                        bgp={-570} />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
