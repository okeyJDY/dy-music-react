import React, { memo } from 'react';

import DYThemeHeaderSmall from '@/components/theme-header-small';

import { HotRadioWrapper } from './style';

export default memo(function DYHotRadio() {
  return (
    <HotRadioWrapper>
      <DYThemeHeaderSmall title="热门主播" />
    </HotRadioWrapper>
  )
})
