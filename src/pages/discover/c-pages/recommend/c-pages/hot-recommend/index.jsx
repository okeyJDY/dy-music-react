import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../redux/actionCreators';

import DYThemeHeaderRCM from '@/components/theme-header-rcm';
import DYSongCover from '@/components/songs-cover';

import { HotRecommendWrapper } from './style';

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
    <HotRecommendWrapper>
      <DYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <DYSongCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
