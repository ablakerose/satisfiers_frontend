import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Logout from "./Logout.js";

const NavBar = ({ currentUser }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        {currentUser ? "MyNeedsSatisfiersPage" : ""}
      </Link>

      <div className="ui secondary pointing menu">
        {currentUser ? <h5>Welcome, {currentUser.name}</h5> : ""}
      </div>

      <Link to="/logout"> Log Out </Link>
      {/* <div> {currentUser ? <Link to="/logout"> Log Out </Link> : ""}</div> */}

      <Link to="/" className="item">
        {currentUser ? "AllNeeds" : ""}
      </Link>
    </div>
  );
};

// I can do this because I know the incoming argumetn is an object, state, coming from redux
const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(NavBar);
