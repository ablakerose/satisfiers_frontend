export default (state = [], action) => {
  //debugger;
  //console.log(need);
  switch (action.type) {
    case "SET_NEED":
      return action.need;
    default:
      return state;
  }
};
