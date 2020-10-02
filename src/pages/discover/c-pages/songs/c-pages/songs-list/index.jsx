import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongsAction } from '../../redux/actionCreators';

import DYPagination from '@/components/pagination';
import DYSongCover from '@/components/song-cover';
import { ListWrapper } from './style';

export default memo(function DYSongsList() {

  // state and props
  const [currentPage, setCurrentPage] = useState(1);

  // redux hook
  const dispatch = useDispatch();
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"]),
  }), shallowEqual);

  // other handle
  const playlists = (categorySongs && categorySongs.playlists) || [];
  const total = (categorySongs && categorySongs.total) || 0;

  // fucntion handle
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getSongsAction(page - 1));
    window.scrollTo(0, 0);
  }
  
  return (
    <ListWrapper>
      <div className="song-list">
        {
          playlists.map((item, index) => {
            return <DYSongCover key={item.id} info={item} />
          })
        }
      </div>
      <DYPagination total={total}
                    currentPage={currentPage} 
                    onPageChange={onPageChange} />
    </ListWrapper>
  )
})
