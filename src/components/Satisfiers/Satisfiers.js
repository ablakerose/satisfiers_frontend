import React from "react";
//import _ from "underscore";
import SatisfierCardPerNeed from "./SatisfierCardPerNeed";

const Satisfiers = props => {
  return (
    <div>
      {props.satisfiers.map((satisfier, i) => (
        <ul key={i}>
          <li className="item">
            <SatisfierCardPerNeed satisfier={satisfier} />
          </li>
        </ul>
      ))}
    </div>
  );

  //
  //what props does is it creates
};

export default Satisfiers;
