export default (state = [], action) => {
  switch (action.type) {
    case "LIST_SATISFIERS":
      return action.satisfiers[0];
    // whatever we return from our reducer is our new redux state
    // this will be our state that we access in any component that we access
    // so this says, I no longer want my state to point to an empty array of satisfiers (above)
    // I want it to point to an array of satisfiers.
    // case "ADD_SATISFIER_TO_NEEDS":
    //   return [...state, action.satisfier];
    //spreading the state object to accept new satsifer key and spreading state value to include new satisfer
    default:
      return state;
  }
};
