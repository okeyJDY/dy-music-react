import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import DYSongsCategory from '../songs-category';
import {
  HeaderWrapper,
} from './style';

export default memo(function DYSongsHeader() {

  // redux hook
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"]),
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <div className="left">
        <span className="title">{currentCategory}</span>
        <DYSongsCategory className="select" />
      </div>
      <div className="right">
        <button className="hot sprite_button2">热门</button>
      </div>
    </HeaderWrapper>
  )
})
