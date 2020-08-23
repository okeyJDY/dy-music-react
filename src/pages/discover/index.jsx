import React, { memo } from 'react';
import { renderRoutes } from "react-router-config";

import DYTopMenu from "@/pages/discover/top-menu";

import { DiscoverWrapper } from "./style";

export default memo(function DYDiscover(props) {
  return (
    <DiscoverWrapper>
      <DYTopMenu />
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
