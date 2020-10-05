import React, { memo } from 'react';

import DYArtistCategory from './c-cpns/artist-categoty';
import DYArtistContent from './c-cpns/artist-content';
import {
  AristWrapper,
  AristLeft,
  AristRight
} from './style';

export default memo(function DYArist() {
  return (
    <AristWrapper className="wrap-v2">
      <AristLeft>
        <DYArtistCategory />
      </AristLeft>
      <AristRight>
        <DYArtistContent />
      </AristRight>
    </AristWrapper>
  )
})
