import React, { memo } from 'react';

import { hotRadios } from '@/public/local-data';

import DYThemeHeaderSmall from '@/components/theme-header-small';
import { HotRadioWrapper } from './style';

export default memo(function DYHotRadio() {
  return (
    <HotRadioWrapper>
      <DYThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a className="image" href="/todo">
                  <img src={item.picUrl} alt=""/>
                </a>
                <div className="info">
                  <div className="title">
                    <span className="name">{item.name}</span>
                    <span className="vip sprite_icon2"></span>
                  </div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
