import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser.js";
import loginForm from "./reducers/loginForm.js";
import satisfierReducer from "./reducers/satisfierReducer.js";
import needReducer from "./reducers/needReducer.js";
import signupForm from "./reducers/signupForm.js";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";

//just displying different syntax options here (could name the state something else)
const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  satisfierReducer,
  needReducer,
  form: formReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
