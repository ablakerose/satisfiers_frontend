export default (state = { needs: [] }, action) => {
  switch (action.type) {
    case "LIST_NEEDS":
      return { needs: action.needs };

    //the action is from the switch and the .needs is bc I did needs: needs, so that is the KEY of the payload object.

    // whatever we return from our reducer is our new redux state
    // this will be our state that we access in any component that we access
    // so this says, I no longer want my state to point to an empty array of satisfiers (above)
    // I want it to point to an array of satisfiers.

    default:
      return state;
  }
};
