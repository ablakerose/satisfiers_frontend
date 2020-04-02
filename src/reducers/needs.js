export default (state = [], action) => {
  switch (action.type) {
    case "LIST_NEEDS":
      return action.needs;
    case "ADD_SATISFIER_TO_NEEDS":
      //action.needs includeds the updated needs with the new satisafier assocations
      // find each corresponding need by id currently in global state and update its array of satisfiers
      //copy existing state
      const needs = [...state];
      //map over needs saving the results to updateNeeds var
      const updatedNeeds = needs.map(need => {
        //for each need of needs, check if that need.id matches any id of a need in action.needs(the updated need we got back from our api cll)
        const updatedNeed = action.needs.find(n => need.id === n.id);
        // if a match was found, update the satisfiers of the need we're currently iterating over
        // reassign its satisfiers to equal the updated list of satisfiers
        if (updatedNeed) {
          need.satisfiers = updatedNeed.satisfiers;
        }
        //updated or not, we still have to return the need
        return need;
      });
      //return updated need state
      return [...updatedNeeds];

    //the action is from the switch and the .needs is bc I did needs: needs, so that is the KEY of the payload object.

    default:
      return state;
  }
};
