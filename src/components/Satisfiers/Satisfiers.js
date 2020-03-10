import React from "react";

const Satisfiers = props => {
  return (
    <div>
      {" "}
      {props.satisfiers.map(satisfier => (
        <ul class="ui bulleted list">
          <li key={satisfier.id} class="item">
            {satisfier.activity}
          </li>
        </ul>
      ))}
    </div>
  );

  //what props does is it creates
};

export default Satisfiers;
