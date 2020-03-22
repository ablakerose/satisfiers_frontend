import React from "react";
import NeedCard from "./NeedCard";

const Needs = props => {
  return (
    <div>
      {props.needs.map((need, i) => (
        <div key={i}>
          <div className="item">
            <NeedCard need={need} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Needs;
