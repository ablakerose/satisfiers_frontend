export const setNeed = need => {
  return {
    type: "SET_NEED",
    need
  };
};

export const fetchNeed = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/needs/${id}`)
      .then(resp => resp.json())
      .then(need => dispatch(setNeed(need)));
  };
};
