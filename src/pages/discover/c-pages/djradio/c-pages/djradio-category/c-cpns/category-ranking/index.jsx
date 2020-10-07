import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { padLeftZero } from '@/utils/format-utils';
import {
  getProgramsAction,
  getProgramTopListAction
} from '../../../../redux/actionCreators';

import DYProgramControl from '@/components/program-control';
import DYThemeHeaderNormal from '@/components/theme-header-normal';
import {
  CategoryRankingWrapper,
  CategoryRankingLeft,
  CategoryRankingRight,
  RankNumber
} from './style';

export default memo(function DYCategoryRanking() {
  // redux hook
  const dispatch = useDispatch();
  const { programs, toplist } = useSelector(state => ({
    programs: state.getIn(["djradio", "programs"]),
    toplist: state.getIn(["djradio", "toplist"]),
  }), shallowEqual);

  // other hook
  useEffect(() => {
    dispatch(getProgramsAction());
    dispatch(getProgramTopListAction());
  }, [dispatch]);

  // function handle
  const renderCategory = (category) => {
    return <div className="category">{category}</div>
  };

  const renderRank = (topItem, index) => {
    let x, y, color, width = 6, height = 6;
    const ranking = index - topItem.lastRank;
    if (topItem.lastRank === -1) {
      x = -67;
      y = -283;
      width = 16;
      height = 17;
    }  else if (ranking === 0) {
      x = -74;
      y = -274;
    } else if (ranking > 0) {
      x = -74;
      y = -324;
    } else if (ranking < 0) {
      x = -74;
      y = -304;
      color = "#ba2226"
    }
    
    return (
      <RankNumber x={x} y={y} color={color} width={width} height={height}>
        <span className="num">{padLeftZero(index.toString())}</span>
        <span className="rank-icon">
          <i className="icon sprite_icon2"></i>
          {topItem.lastRank !== -1 && <span className="rank">{Math.abs(ranking)}</span>}
        </span>
      </RankNumber>
    )
  }

  // jsx code

  return (
    <CategoryRankingWrapper>
      <CategoryRankingLeft>
        <DYThemeHeaderNormal title="推荐节目" rightSlot="更多 >" />
        <div className="program-recommend">
          {
            programs.map((item, index) => {
              return <DYProgramControl key={item.id}
                                       info={item} 
                                       infoWidth={254}
                                       rightSlot={renderCategory(item.radio.category)} />
            })
          }
        </div>
      </CategoryRankingLeft>
      <CategoryRankingRight>
        <DYThemeHeaderNormal title="节目排行榜" rightSlot="更多 >" />
        <div className="program-toplist">
          {
            toplist.map((item, index) => {
              return <DYProgramControl key={item.program.id}
                                       info={item.program}
                                       infoWidth={208}
                                       leftSlot={renderRank(item, index + 1)} />
            })
          }
        </div>
      </CategoryRankingRight>
    </CategoryRankingWrapper>
  )
})
