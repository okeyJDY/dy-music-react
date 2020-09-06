import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from "../../redux/actionCreators";

import { Carousel } from "antd";

import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight,
  TopBannerControl
} from "./style";

export default memo(function DYTopBanner() {
  // props and state
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

  // other handle
  const bgImage = topBanners[currentIndex] &&
                  topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

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
        <TopBannerRight className="download_bg">
          <div className="download-btn download_bg"></div>
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
