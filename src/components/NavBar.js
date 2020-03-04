import React from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Logout from "./Logout.js";

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? <p>Welcome, {currentUser.name}</p> : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  );
};

// I can do this because I know the incoming argumetn is an object, state, coming from redux
const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(NavBar);
