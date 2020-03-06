// syncronous action creators
export const setMyNeeds = needs => {
  return {
    type: "SET_MY_NEEDS",
    needs: needs
  };
};

// async actions

export const getMyNeeds = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/needs", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          console.log(response);
          dispatch(setMyNeeds([response]));
        }
      })
      .catch();
  };
};
