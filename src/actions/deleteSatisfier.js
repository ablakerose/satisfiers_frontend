export const deleteSatisifer = satisfierId => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/satisfiers/${satisfierId}`, {
      method: "DELETE"
    })
      .then(resp => resp.json)
      .then(satisfier =>
        dispatch({ type: "DELETE_TRANSACTION", satisfierId: satisfierId })
      );
  };
};
