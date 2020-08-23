import React, { memo } from 'react';

import DYTopBanner from './c-pages/top-banner';
import DYHotRecommend from './c-pages/hot-recommend';
import DYNewAlbum from './c-pages/new-album';
import DYRecommendRanking from './c-pages/recommend-ranking';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function DYRecommend() {

  return (
    <RecommendWrapper>
      <DYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <DYHotRecommend />
          <DYNewAlbum />
          <DYRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
