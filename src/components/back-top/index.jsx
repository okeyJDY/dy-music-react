import React, { memo } from 'react';

import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { BackTopWrapper } from './style';

export default memo(function DYBackTop() {
  return (
    <BackTopWrapper>
      <BackTop>
        <div className="back-top">
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </BackTopWrapper>
  )
})
