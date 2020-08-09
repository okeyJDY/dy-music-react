import React, { memo } from 'react';
import { Provider } from "react-redux";

import store from "@/redux";

import DYPagesMain from "@/pages/main/";

export default memo(function App() {
  return (
    <Provider store={store}>
      <DYPagesMain />
    </Provider>
  )
})
