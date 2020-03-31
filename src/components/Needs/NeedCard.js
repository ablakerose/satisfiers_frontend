import React from "react";
import NeedLink from "./NeedLink";
import NeedWorth from "./NeedWorth.js";
//import { Progress } from "semantic-ui-react";

//import SatisfierDetails from "./SatisfierDetails.js";

const Needcard = props => {
  return (
    <div className={`ui ${props.color} cards`}>
      <div className="card">
        <div className="content">
          <NeedLink need={props.need} />
          {/* <i className={`${props.icon}`}> </i> */}
          <div>
            <NeedWorth need={props.need} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needcard;
