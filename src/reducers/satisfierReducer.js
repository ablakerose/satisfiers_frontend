export default (state = { satisfiers: [] }, action) => {
  switch (action.type) {
    case "SET_MY_SATISFIERS":
      return { satisfiers: action.satisfiers[0] };
    // whatever we return from our reducer is our new redux state
    // this will be our state that we access in any component that we access
    // so this says, I no longer want my state to point to an empty array of satisfiers (above)
    // I want it to point to an array of satisfiers.

    default:
      return state;
  }
};