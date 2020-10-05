import React, { memo } from 'react';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import { SettleSingerWrapper, RightSlot } from './style';

export default memo(function DYSettleSinger() {

  const rightSlot = (
    <RightSlot>更多 &gt;</RightSlot>
  );
  
  return (
    <SettleSingerWrapper>
      <DYThemeHeaderNormal title="入驻歌手" rightSlot={rightSlot} />

    </SettleSingerWrapper>
  )
})
