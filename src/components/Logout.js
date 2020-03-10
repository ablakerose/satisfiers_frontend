import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";
 
const Logout = ({ logout }) => {
  return (
    <div className="item">
      <form className="ui form" onSubmit={logout}>
        <div className="field">
          <input type="submit" value="Log Out" />
        </div>
      </form>
    </div>
  ); 
};

export default connect(null, { logout })(Logout);
