import React, { memo } from 'react';
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { discoverMenu } from "@/public/local-data";
import {
  DiscoverWrapper,
  TopMenu
} from "./style";

export default memo(function DYDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((menuItem, index) => (
            <div className="menu-item" key={menuItem.title}>
              <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
            </div>
          ))}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
