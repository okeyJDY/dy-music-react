import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';
import { singerAlphas } from '@/utils/handle-data';
import { getArtistListAction } from '@/pages/discover/c-pages/artist/redux/actionCreators';

import { AlphaListWrapper } from './style';

export default memo(function DYAlphaList() {
  // state and props
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  // redux hook
  const dispatch = useDispatch();
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"]),
  }), shallowEqual);

  // other hook
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentArea, currentType]);
  useEffect(() => {
    dispatch(getArtistListAction(currentAlpha));
  }, [currentArea, currentType, currentAlpha, dispatch]);

  return (
    <AlphaListWrapper className="alpha-list">
      {
        singerAlphas.map((item, index) => {
          let alpha = item;
          if (item === "-1") alpha = "热门";
          if (item === "0") alpha = "其他";
          return (
            <div key={item}
                 className={classnames("alpha-item", { "active": currentAlpha === item })}>
              <span onClick={e => setCurrentAlpha(item)}>{alpha.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
