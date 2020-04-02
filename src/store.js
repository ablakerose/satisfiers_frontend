import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import satisfiers from "./reducers/satisfiers.js";
import needs from "./reducers/needs.js";
import need from "./reducers/need.js";
import increment from "./reducers/increment.js";
import logger from "redux-logger";

//just displying different syntax options here (could name the state something else)
const reducer = combineReducers({
  satisfiers,
  needs,
  need,
  increment
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
