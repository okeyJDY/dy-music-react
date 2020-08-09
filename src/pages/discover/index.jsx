import React, { memo } from 'react';
import { renderRoutes } from "react-router-config";

import { DiscoverWrapper } from "./style";

import DiscoverTopMenu from "@/components/discover-top-menu";

export default memo(function DYDiscover(props) {
  return (
    <DiscoverWrapper>
      <DiscoverTopMenu />
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
