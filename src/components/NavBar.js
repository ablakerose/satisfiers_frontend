import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" exact className="item">
          Home
        </Link>

        <Link to="/about" exact className="item">
          About
        </Link>
        <Link to="/needs" exact className="item">
          Needs
        </Link>
        <Link to="/satisfier/new" exact className="item">
          Add An Activity
        </Link>
      </div>
    );
  }
}

export default NavBar;
