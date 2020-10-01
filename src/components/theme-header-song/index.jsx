import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { HeaderWrapper } from './style';

export default memo(function DYThemeHeaderSong(props) {
  // state and props
  const { title } = props;

  // redux hook
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="title">{title}</div>
        <div className="count">{`${playList.trackCount || 0}首歌`}</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playList.playCount || 0}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
