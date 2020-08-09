import React, { memo } from 'react';
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/public/local-data";
import {
  DiscoverTopMenuWrapper,
  TopMenu
} from "./style";

export default memo(function DiscoverTopMenu() {
  return (
    <DiscoverTopMenuWrapper>
      <TopMenu className="wrap-v1">
        {discoverMenu.map((menuItem, index) => (
          <div className="menu-item" key={menuItem.title}>
            <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
          </div>
        ))}
      </TopMenu>
    </DiscoverTopMenuWrapper>
  )
})
