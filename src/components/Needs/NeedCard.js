import React from "react";
import NeedLink from "./NeedLink";
import NeedWorth from "./NeedWorth.js";
import NeedBar from "./NeedBar.js";
//import SatisfierDetails from "./SatisfierDetails.js";

const Needcard = props => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <NeedLink need={props.need} />

          <div>
            <NeedWorth need={props.need} />
            <NeedBar need={props.need} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needcard;
