import React from "react";
import Login from "./components/Login.js";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";

class App extends React.Component {
  componenetDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return <Login />;
  }
}

export default connect(null, { getCurrentUser })(App);
