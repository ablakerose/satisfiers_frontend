import React from "react";
import MyNeeds from "./bottomContainer/MyNeeds.js";
import NeedsBars from "./bottomContainer/NeedsBars.js";
import { connect } from "react-redux";

const MainContainer = ({ currentUser }) => {
  return (
    <div className="MainContainer">
      <h2>I am the main container.</h2>
      {/* <MyNeeds /> */}

      <div className="NeedsBars">{currentUser ? <NeedsBars /> : null}</div>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(MainContainer);
