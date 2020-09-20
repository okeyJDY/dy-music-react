import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { RankingHeaderWrapper } from './style';

export default memo(function DYRankingHeader() {

  // redux hook
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  // other hook

  return (
    <RankingHeaderWrapper>
      {playList.name}
    </RankingHeaderWrapper>
  )
})
