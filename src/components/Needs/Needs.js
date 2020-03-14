import React from "react";
import NeedCard from "./NeedCard";

const Needs = props => {
  return (
    <div>
      {props.needs.map((need, i) => (
        <ul key={i}>
          <li className="item">
            <NeedCard need={need} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Needs;
