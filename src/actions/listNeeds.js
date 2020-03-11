// syncronous action creators
export const listNeeds = needs => {
  return {
    type: "LIST_NEEDS",
    needs: needs
  };
};

// async actions
export const fetchNeeds = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/needs")
      .then(resp => resp.json())
      .then(needs => dispatch(listNeeds(needs)));
    // if want to see what it looks like, put debugger just before switch in the needs reducer
  };
};
