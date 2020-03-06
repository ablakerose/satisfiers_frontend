import React from "react";
import { connect } from "react-redux";

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? <strong>Welcome, {currentUser.name}</strong> : ""}
    </div>
  );
};

// I can do this because I know the incoming argumetn is an object, state, coming from redux
const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(NavBar);
