export const createSatisfier = formValues => {
  //the formValues is the argument 'this.state' sent in from handleSubmit
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/satisfiers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    })
      .then(resp => resp.json())
      .then(satisfier =>
        dispatch({ type: "ADD_SATISFIER", payload: satisfier })
      );
  };
};
