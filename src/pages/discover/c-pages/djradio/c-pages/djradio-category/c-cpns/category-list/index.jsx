import React, { memo, useState, useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getDjRecommendType } from '@/services/djradio';

import DYThemeHeaderNormal from '@/components/theme-header-normal';
import { CategoryListWrapper } from './style';

export default memo(function DYCategoryList(props) {
  // state and props
  const { type, title } = props;
  const [djRadios, setDjRadios] = useState([]);

  // other hook
  useEffect(() => {
    getDjRecommendType(type).then(res => {
      setDjRadios(res.djRadios.slice(0, 4));
    });
  }, [type]);

  return (
    <CategoryListWrapper>
      <DYThemeHeaderNormal title={title} rightSlot="更多 >" />
      <div className="recommend-list">
        {
          djRadios.map((item, index) => {
            return (
              <div key={item.id} className="item">
                <img src={getSizeImage(item.picUrl, 120)} alt=""/>
                <h3>{item.name}</h3>
              </div>
            )
          })
        }
      </div>
    </CategoryListWrapper>
  )
})
