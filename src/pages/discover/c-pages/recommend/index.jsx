import React, { memo } from 'react';

import DYBackTop from '@/components/back-top';
import DYTopBanner from './c-cpns/top-banner';
import DYHotRecommend from './c-cpns/hot-recommend';
import DYNewAlbum from './c-cpns/new-album';
import DYRecommendRanking from './c-cpns/recommend-ranking';
import DYUserLogin from './c-cpns/user-login';
import DYSettleSinger from './c-cpns/settle-singer';
import DYHotRadio from './c-cpns/hot-radio';
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
        <RecommendRight>
          <DYUserLogin />
          <DYSettleSinger />
          <DYHotRadio />
        </RecommendRight>
      </Content>
      <DYBackTop />
    </RecommendWrapper>
  )
})
