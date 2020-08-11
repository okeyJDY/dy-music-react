import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from "antd";

import { getTopBannersAction } from "../../redux/actionCreators";

import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight
} from "./style";

export default memo(function DYTopBanner() {

  // redux hooks
  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch])

  return (
    <TopBannerWrapper>
      <div className="banner wrap-v2">
        <TopBannerLeft>
          <Carousel effect="fade" autoplay>
            {topBanners.map((item, index) => {
              return (
                <a className="banner-item" href={item.url} key={item.scm} target="_brank">
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </a>
              )
            })}
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </TopBannerRight>
      </div>
    </TopBannerWrapper>
  )
})
