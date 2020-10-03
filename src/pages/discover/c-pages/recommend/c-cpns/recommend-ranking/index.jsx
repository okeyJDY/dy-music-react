import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from '../../redux/actionCreators';

import DYThemeHeaderRCM from '@/components/theme-header-rcm';
import DYTopRanking from '@/components/top-ranking';

import { RankingWrapper } from './style';

export default memo(function DYRecommendRanking() {

  // redux hooks
  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <DYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <DYTopRanking info={upRanking} />
        <DYTopRanking info={newRanking} />
        <DYTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
