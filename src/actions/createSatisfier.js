export const addSatisfier = needs => {
  return {
    type: "ADD_SATISFIER_TO_NEEDS",
    needs
  };
};

export const createSatisfier = satisfier => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/satisfiers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ satisfier: satisfier })
    })
      .then(resp => resp.json())
      .then(needs => dispatch(addSatisfier(needs)));
  };
};
