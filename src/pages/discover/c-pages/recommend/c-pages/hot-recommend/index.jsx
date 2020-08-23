import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../redux/actionCreators';

import DYThemeHeaderRCM from '@/components/theme-header-rcm';
import { useEffect } from 'react';

export default memo(function DYHotRecommend() {

  // redux hook
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  // other hook
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <div>
      <DYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <h2>{hotRecommends[0] && hotRecommends[0].name}</h2>
    </div>
  )
})
