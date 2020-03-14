import React from "react";
import { setMySatisfiers } from "../../actions/mySatisfiers";
//import Satisfiers from "../components/Satisfiers/Satisfiers.js";
import NeedWorth from "./NeedWorth.js";

//Needcard will be passed props.need
// props.need will contain need.satifiers
//iterate over need.satifiers, rendering Satifier component for each

// return (
//   <h3>props.need.name</h3>
//   <ul>
//     {props.need.satisfiers.map(satisfier => {
//       <li>{sat.activity}</li>
//     })}
//   </ul>
// )

const Needcard = props => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.need.name} </div>
          <div className="description">
            <ul>
              {props.need.satisfiers.map((satisfier, i) => (
                <li key={i}>{satisfier.activity}</li>
              ))}
            </ul>
            <div>
              <NeedWorth need={props.need} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needcard;
