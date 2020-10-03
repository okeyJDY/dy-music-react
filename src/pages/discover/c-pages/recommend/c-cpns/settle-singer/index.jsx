import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSettleSingerAction } from '../../redux/actionCreators';

import DYThemeHeaderSmall from '@/components/theme-header-small';

import { SettleSingerWrapper } from './style';

export default memo(function DYSettleSinger() {
  // redux hooks
  const dispatch = useDispatch();
  const { settleSingers } = useSelector(state => ({
    settleSingers: state.getIn(["recommend", "settleSingers"])
  }))

  // other hooks
  useEffect(() => {
    dispatch(getSettleSingerAction(5));
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <DYThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
      <div className="singer-list">
        {
          settleSingers.map((item, index) => {
            return (
              <a className="item" href="/todo" key={item.picId}>
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name} </div>
                  <div className="name">{item.name} </div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for sprite_button">
        <a className="sprite_button" href="/todo">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
