import React, { memo } from 'react';
import { renderRoutes } from "react-router-config";

import DiscoverTopMenu from "@/components/discover-top-menu";

import { DiscoverWrapper } from "./style";

export default memo(function DYDiscover(props) {
  return (
    <DiscoverWrapper>
      <DiscoverTopMenu />
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
