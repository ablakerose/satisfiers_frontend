import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        MyNeedsSatisfiersPage
      </Link>
      <div className="right menu">
        {currentUser ? <strong>Welcome, {currentUser.name}</strong> : ""}
      </div>
      <Link to="/" className="item">
        AllNeeds
      </Link>
    </div>
  );
};

// I can do this because I know the incoming argumetn is an object, state, coming from redux
const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(NavBar);
