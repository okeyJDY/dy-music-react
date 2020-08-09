import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const thunkMiddleware = applyMiddleware(thunk);

const store = createStore(reducer, composeEnhancers(thunkMiddleware));

export default store;