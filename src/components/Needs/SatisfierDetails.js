import React from "react";
import Needs from "./Needs.js";

const SatisfierDetails = () => {
  return (
    <div className="description">
      <Needs />
      {/* <ul>
        {props.need.satisfiers.map((satisfier, i) => (
          <li key={i}>{satisfier.activity}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SatisfierDetails;
