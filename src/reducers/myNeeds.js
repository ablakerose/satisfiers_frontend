export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_NEEDS":
      return action.needs;
    default:
      return state;
  }
};
