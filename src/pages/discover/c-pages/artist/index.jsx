import React, { memo } from 'react';

import DYArtistCategory from './c-cpns/artist-categoty';
import DYArtistList from './c-cpns/artist-list';
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
        <DYArtistList />
      </AristRight>
    </AristWrapper>
  )
})
