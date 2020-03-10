// syncronous action creators
export const setMySatisfiers = satisfiers => {
  return {
    type: "SET_MY_SATISFIERS",
    satisfiers: satisfiers
  };
};

// async actions
export const getMySatisfiers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/satisfiers")
      .then(resp => resp.json())
      .then(satisfiers => dispatch(setMySatisfiers([satisfiers])));
    // here dispatching the action object (setMySatisfiers defined above) to the reducer
    // if want to see what it looks like, put debutter just before switch in the satisfiers reducer
  };
};
