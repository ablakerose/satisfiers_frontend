import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import MainContainer from "./components/MainContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import MyNeeds from "./components/MyNeeds.js";

class App extends React.Component {
  componenetDidMount() {
    //  this.props.getCurrentUser();
    //getCurrentUser for authorization than authentication.
    //can call it wherever i need a reference to the currentUser
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Logout />
          <NavBar />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ my-needs" component={MyNeeds} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
