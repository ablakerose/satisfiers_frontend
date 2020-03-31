import React from "react";
import { Link } from "react-router-dom";

const NeedLink = props => {
  return (
    <div className="ui grid">
      <div className="content">
        <div className="left floated left aligned six wide column">
          <Link to={`/needs/${props.need.id}`} exact className="item">
            <div className="header">{props.need.name} </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedLink;
