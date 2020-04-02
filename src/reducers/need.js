export default (state = [], action) => {
  switch (action.type) {
    case "SET_NEED":
      return action.need;
    default:
      return state;
  }
};
