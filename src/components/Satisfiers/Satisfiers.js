import React from "react";
import _ from "underscore";

const Satisfiers = props => {
  return (
    <div>
      {" "}
      {props.satisfiers.map(satisfier => (
        <ul className="ui bulleted list">
          <li className="item">{satisfier.activity}</li>
        </ul>
      ))}
    </div>
  );

  //what props does is it creates
};

export default Satisfiers;
