import React, { memo } from 'react';


import DYTopBanner from "./c-pages/top-banner";

import { RecommendWrapper } from "./style";

export default memo(function DYRecommend() {

  return (
    <RecommendWrapper>
      <DYTopBanner />
    </RecommendWrapper>
  )
})
