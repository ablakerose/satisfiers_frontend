import React from "react";

//Account
const SatisfierCardPerNeed = props => {
  return (
    <div>
      {/* <li>
        {props.satisfier.activity},{" "}
        {props.satisfier.needs.map((need, i) => need.name)}
      </li> */}

      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">Subsistence </div>
            <div className="description">
              {props.satisfier.activity},{" "}
              {props.satisfier.needs.map((need, i) => need.name)} 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfierCardPerNeed;
