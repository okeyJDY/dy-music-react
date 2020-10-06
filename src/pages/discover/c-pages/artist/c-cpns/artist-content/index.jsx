import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import DYSettleSinger from './c-cpns/settle-artist';
import DYAlphaList from './c-cpns/alpha-list';
import DYArtistList from './c-cpns/artist-list';
import { ArtistContentWrapper } from './style';

export default memo(function DYArtistContent() {
  // redux hook
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"]),
  }), shallowEqual);

  return (
    <ArtistContentWrapper>
      {currentArea === -1 && currentType.type === 1 && <DYSettleSinger />}
      <DYThemeHeaderNormal title={currentType.name} />
      {currentArea !== -1 && <DYAlphaList />}
      <DYArtistList />
    </ArtistContentWrapper>
  )
})
