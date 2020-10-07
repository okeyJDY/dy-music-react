import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { ProgramControlWrapper } from './style';

export default memo(function DYProgramControl(props) {
  // state and props
  const { info, leftSlot, rightSlot, infoWidth } = props;

  return (
    <ProgramControlWrapper className="program-control" infoWidth={infoWidth}>
      <div className="left">{leftSlot}</div>
      <div className="content">
        <img src={getSizeImage(info.radio.picUrl, 40)} alt="" />
        <div className="info">
          <div className="name text-nowrap">{info.name}</div>
          <div className="desc text-nowrap">{info.radio.name}</div>
        </div>
      </div>
      <div className="right">{rightSlot}</div>
    </ProgramControlWrapper>
  )
})
