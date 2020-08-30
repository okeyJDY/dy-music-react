import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { getSizeImage } from '@/utils/format-utils';

import {
  TopRankingWrapper,
  TopRankingHeader,
  TopRankingList,
  TopRankingFooter
} from './style';

const DYTopRanking = memo(props => {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  return (
    <TopRankingWrapper>
      <TopRankingHeader>
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt=""/>
          <a href="/todo" className="cover sprite_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </TopRankingHeader>
      <TopRankingList>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="list-item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="play btn sprite_02"></button>
                    <button className="addto btn sprite_icon2"></button>
                    <button className="favor btn sprite_02"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </TopRankingList>
      <TopRankingFooter>
        <a href="/todo">查看全部 ></a>
      </TopRankingFooter>
    </TopRankingWrapper>
  )
})

DYTopRanking.propTypes = {
  info: PropTypes.object.isRequired
}

DYTopRanking.defaultProps = {
  info: {}
}

export default DYTopRanking;