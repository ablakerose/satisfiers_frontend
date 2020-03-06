import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js";
import { getMyNeeds } from "./myNeeds.js";

// syncronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user: user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};

// async action creators
export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
      //passing in credentials from the argument in the arrow function above.
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
          dispatch(getMyNeeds());
          dispatch(resetLoginForm());
        }
      })
      .catch();
  };
};

export const signup = credentials => {
  return dispatch => {
    //problem: only letting top level "user" with properties of "name" or "username" to come through
    //instead of passing along the raw object, passing object below with top-level key of user that points
    // to credentials
    // now it should have all top-level keys under user and a nested key under "hometown"

    // const userInfo = {
    //   user: credentials
    // };

    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
      //passing in credentials from the argument in the arrow function above.
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
          dispatch(getMyNeeds());
          dispatch(resetSignupForm());
        }
      })
      .catch();
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    //choosing to logout user on the front end BEFORE getting response from backend
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    });
  };
};

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
          dispatch(getMyNeeds());
        }
      })
      .catch();
  };
};
