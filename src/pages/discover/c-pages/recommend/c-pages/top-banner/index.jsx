import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from "antd";

import { getTopBannerAction } from "../../redux/actionCreators";

import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight,
  TopBannerControl
} from "./style";

export default memo(function DYTopBanner() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux hooks
  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);

  // other hooks
  const topBannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <TopBannerLeft>
          <Carousel autoplay
                    effect="fade" 
                    ref={topBannerRef}
                    dots={{ className: "dots" }}
                    beforeChange={beforeChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <a className="banner-item" href={item.url} key={item.scm} target="_brank">
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </a>
                )
              })
            }
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </TopBannerRight>
        <TopBannerControl>
          <button className="btn left" onClick={e => topBannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => topBannerRef.current.next()}></button>
        </TopBannerControl>
      </div>
    </TopBannerWrapper>
  )
})
