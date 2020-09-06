import React, { memo } from 'react';

import DYThemeHeaderSmall from '@/components/theme-header-small';

import { SettleSingerWrapper } from './style';

export default memo(function DYSettleSinger() {
  return (
    <SettleSingerWrapper>
      <DYThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
    </SettleSingerWrapper>
  )
})
