import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import moment from 'moment';
import { getSizeImage } from '@/utils/format-utils';

import { Table } from 'antd';
import DYThemeHeaderSong from '@/components/theme-header-song'
import {
  RankingListWrapper,
  RankingNumTd,
  TitleTd,
  TimeTd,
  SingerTd
} from './style';

export default memo(function DYRankingList() {

  // redux hook
  const { playList, spinning } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
    spinning: state.getIn(["ranking", "spinning"]),

  }), shallowEqual);

  // other handle 
  const columns = [
    {
      title: "",
      dataIndex: 'rank',
      width: 77,
      render: (text, record, index) => {
        return (
          <RankingNumTd>
            <span className="num">{index + 1}</span>
            <span className="new sprite_icon2"></span>
          </RankingNumTd>
        )
      }
    },
    {
      title: "标题",
      dataIndex: 'title',
      render: (text, record, index) => {
        if (index < 3) {
          return (
            <TitleTd style={{padding: "4px 0"}}>
              <img className="image" src={getSizeImage(record.al.picUrl, 50)} alt="" />
              <span className="play sprite_table"></span>
              <span className="name text-nowrap">{record.name}</span>
            </TitleTd>
          )
        } else {
          return (
            <TitleTd>
              <span className="play sprite_table"></span>
              <span className="name text-nowrap">{record.name}</span>
            </TitleTd>
          )
        }
      }
    },
    {
      title: "时长",
      dataIndex: 'time',
      width: 91,
      render: (text, record, index) => {
        return (
          <TimeTd>
            <span>{moment(record.dt).format("mm:ss")}</span>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </TimeTd>
        );
      }
    },
    {
      title: "歌手",
      dataIndex: 'singer',
      width: "26%",
      render: (text, record, index) => {
        return <SingerTd>{record.ar[0].name}</SingerTd>
      }
    },
  ];

  return (
    <RankingListWrapper>
      <DYThemeHeaderSong title="歌曲列表" />
      <Table bordered
             pagination={false}
             columns={columns} 
             dataSource={playList.tracks}
             rowKey={record => record.id} />
    </RankingListWrapper>
  )
})
