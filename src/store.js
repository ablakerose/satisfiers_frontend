import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users.js";
import currentUser from "./reducers/currentUser.js";
import loginForm from "./reducers/loginForm.js";

//just displying different syntax options here (could name the state something else)
const reducer = combineReducers({
  usersReducer,
  currentUser,
  loginForm
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
