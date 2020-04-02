export const addSatisfier = needs => {
  return {
    type: "ADD_SATISFIER_TO_NEEDS",
    needs
  };
};

export const createSatisfier = satisfier => {
  return dispatch => {
    return (
      fetch("http://localhost:3001/api/v1/satisfiers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ satisfier: satisfier })
      })
        // the reason we want the .thens, to force a page refresh to GET the information from the backend.
        //we want this to immediately be updated without having rerequest from the backend.
        //now it's right away getting the information and addint ot our redux store without an unnecessary additional fetch request to backend
        .then(resp => resp.json())
        .then(needs => dispatch(addSatisfier(needs)))
    );
  };
};
