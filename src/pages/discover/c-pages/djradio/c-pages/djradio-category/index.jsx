import React, { memo } from 'react';

import DYCategoryRanking from './c-cpns/category-ranking';
import DYCategoryList from './c-cpns/category-list';
import { DjradioCategoryWrapper } from './style';

export default memo(function DYDjradioCategory() {
  return (
    <DjradioCategoryWrapper>
      <DYCategoryRanking />
      <DYCategoryList type={2} title="音乐故事·电台" />
      <DYCategoryList type={6} title="美文读物·电台" />
      <DYCategoryList type={5} title="脱口秀·电台" />
      <DYCategoryList type={3} title="情感调频·电台" />
      <DYCategoryList type={2001} title="创作|翻唱·电台" />
      <DYCategoryList type={11} title="人文历史·电台" />
    </DjradioCategoryWrapper>
  )
})
