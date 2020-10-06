import React, { memo } from 'react';

import DYRadioCategory from './c-cpns/radio-category';
import { DjradioWrapper } from './style';

export default memo(function DYDjradio() {
  return (
    <DjradioWrapper className="wrap-v2">
      <DYRadioCategory />
    </DjradioWrapper>
  )
})
