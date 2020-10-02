import React, { memo } from 'react';

import { HeaderWrapper } from './style';

export default memo(function DYThemeHeaderNormal(props) {
  // state and props
  const { title, rightSlot } = props;

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="title">{title}</div>
      </div>
      <div className="right">
        {rightSlot}
      </div>
    </HeaderWrapper>
  )
})
