export const createSatisfier = formValues => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/satisfiers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    }).then(resp => resp.json());
    // .then(satisfiers [...satisfiers]
  };
};
