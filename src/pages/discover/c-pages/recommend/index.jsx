import React, { memo, useEffect } from 'react';

import { getTopBannersAction } from "./redux/actionCreators";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export default memo(function DYRecommend() {

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
    <div>
      {topBanners[0] && topBanners[0].typeTitle}
    </div>
  )
})
