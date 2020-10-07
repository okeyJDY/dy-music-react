import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import DYRadioCategory from './radio-category';
import { DjradioWrapper } from './style';

export default memo(function DYDjradio(props) {
  return (
    <DjradioWrapper className="wrap-v2">
      <DYRadioCategory />
      {renderRoutes(props.route.routes)}
    </DjradioWrapper>
  )
})
