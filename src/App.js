import React, { memo } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from '@/routers';

import DYAppHeader from "@/components/app-header";
import DYAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <DYAppHeader />
      {renderRoutes(routes)}
      <DYAppFooter />
    </HashRouter>
  )
})
