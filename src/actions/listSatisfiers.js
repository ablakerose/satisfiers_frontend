// syncronous action creators
export const listSatisfiers = satisfiers => {
  return {
    type: "LIST_SATISFIERS",
    satisfiers: satisfiers
  };
};

// async actions
export const fetchSatisfiers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/satisfiers")
      .then(resp => resp.json())
      .then(satisfiers => dispatch(listSatisfiers([satisfiers])));
    // here dispatching the action object (listSatisfiers defined above) to the reducer
    // if want to see what it looks like, put debugger just before switch in the satisfiers reducer
  };
};
