import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { getSizeImage } from '@/utils/format-utils';
import {
  changeCurrentIndex,
  getPlayListgAction,
} from '../../redux/actionCreators';

import { TopRankingWrapper } from './style';

export default memo(function DYTopRanking() {

  // redux hook
  const dispatch = useDispatch();
  const {
    topList,
    currentIndex
  } = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual);

  // other hook
  useEffect(() => {
    const id = topList && topList[currentIndex] && topList[currentIndex].id
    if (!id) return;
    dispatch(getPlayListgAction(id));
  }, [dispatch, topList, currentIndex]);

  // function handle
  const handleItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndex].id
    dispatch(getPlayListgAction(id));
  };

  return (
    <TopRankingWrapper>
      {
        topList && topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classnames("item", { "active": index === currentIndex })}
                   onClick={e => handleItemClick(index)} >
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
