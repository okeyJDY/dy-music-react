import React, { memo, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { albumPlayStyle } from '@/public/local-data';
import { getTopAlbumAction } from '../../redux/actionCreators';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import DYAlbumCover from '@/components/album-cover';
import DYPagination from '@/components/pagination';
import { TopAlbumWrapper } from './style';

export default memo(function DYTopAlbum() {
  // state and props
  const [currentPage, setCurrentPage] = useState(1);

  // redux hook
  const dispatch = useDispatch();
  const { topAlbums, topTotal } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    topTotal: state.getIn(["album", "topTotal"]),
  }), shallowEqual);

  // function handle
  const onPageChange = useCallback((page, pageSize) => {
    setCurrentPage(page);
    dispatch(getTopAlbumAction({ page: page - 1 }));
  }, [dispatch]);

  return (
    <TopAlbumWrapper>
      <DYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return <DYAlbumCover key={item.id} info={item} playStyle={albumPlayStyle}
                                 size={130}  width={153} bgp={-845}/>
          })
        }
      </div>
      <DYPagination total={topTotal}
                    currentPage={currentPage}
                    onPageChange={onPageChange} />
    </TopAlbumWrapper>
  )
})
