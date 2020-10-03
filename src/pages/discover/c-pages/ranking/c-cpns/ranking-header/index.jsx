import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import moment from 'moment';
import { getSizeImage } from '@/utils/format-utils';

import DYSongOperationBar from '@/components/song-operation-bar';
import { RankingHeaderWrapper } from './style';

export default memo(function DYRankingHeader() {

  // redux hook
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);

  // other hook

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={getSizeImage(playList.coverImgUrl, 150)} alt="" />
        <span className="cover sprite_cover">封面</span>
      </div>
      <div className="info">
        <h2 className="title">{playList.name}</h2>
        <div className="item">
          <i className="clock sprite_icon2"></i>
          <span>最近更新：{moment(playList.trackUpdateTime).format("MM月DD日")}</span>
          <span className="update-f">（{"每日更新:TODO"}）</span>
        </div>
        <DYSongOperationBar favorTitle={`(${playList.subscribedCount})`}
                            shareTitle={`(${playList.shareCount})`}
                            downloadTitle={`下载`}
                            commentTitle={`(${playList.commentCount})`} />
      </div>
    </RankingHeaderWrapper>
  )
})
