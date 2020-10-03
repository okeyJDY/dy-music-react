import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from './redux/actionCreators';

import { Spin } from 'antd';
import DYBackTop from '@/components/back-top';
import DYTopRanking from './c-cpns/top-ranking';
import DYRankingHeader from './c-cpns/ranking-header';
import DYRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style';

export default memo(function DYRanking() {
  // redux hook
  const dispatch = useDispatch();
  const { spinning } = useSelector(state => ({
    spinning: state.getIn(["ranking", "spinning"])
  }), shallowEqual);
  // other hook
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <DYTopRanking />
      </RankingLeft>
      <RankingRight>
        <Spin spinning={spinning}>
          <DYRankingHeader />
          <DYRankingList />
        </Spin>
      </RankingRight>
      <DYBackTop />
    </RankingWrapper>
  )
})
