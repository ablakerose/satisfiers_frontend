import React from "react";
import { Link } from "react-router-dom";

const NeedLink = props => {
  return (
    <div className="ui cards">
      <div className="content">
        <Link to="/activitylist" exact className="item">
          <div className="header">{props.need.name} </div>
        </Link>
      </div>
    </div>
  );
};

export default NeedLink;
