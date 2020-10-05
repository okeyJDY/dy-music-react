import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';
import { artistCategories } from '@/public/local-data';
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction
} from '../../redux/actionCreators';

import { ArtistCategoryWrapper, CategoryItem } from './style';

export default memo(function DYArtistCategory() {

  // redux hook
  const dispatch = useDispatch();
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"]),
  }), shallowEqual);

  // function handle
  const selectArtist = (area, currentType) => {
    console.log("object")
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(currentType));
  };

  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            const isSelect = area === currentArea && item.type === currentType.type;
            return (
              <CategoryItem key={item.name}
                className={classnames({ "active": isSelect })}>
                <span onClick={e => selectArtist(area, item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  };

  return (
    <ArtistCategoryWrapper>
      {
        artistCategories.map((item, index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </ArtistCategoryWrapper>
  )
})
