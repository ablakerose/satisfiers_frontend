//update satisfier will make a patch request with the new activity value and id
//the backend will response with the updated satisfier object
//iterate through needs in application state and update each one that has a satisfier with a matching id
//needs.map(need => {
//     const satisfier = need.satisfiers.find(sat => sat.id === updatedSatisfier.id)
//     if(satisfier){
//         satisfier.activity = updatedSatisfier.activity
//     }
// })

export const modifySatisfier = satisfier => {
  return {
    type: "MODIFY_SATISFIER",
    satisfier
  };
};
