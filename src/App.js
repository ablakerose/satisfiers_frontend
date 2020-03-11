import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import Signup from "./components/Signup.js";
import SatisfierContainer from "./container/SatisfierContainer.js";
import NeedContainer from "./container/NeedContainer.js";

class App extends React.Component {
  componenetDidMount() {
    //  this.props.getCurrentUser();
    //getCurrentUser for authorization than authentication.
    //can call it wherever i need a reference to the currentUser
  }
  render() {
    //const { loggedIn } = this.props;
    return (
      <div className="ui container">
        <NavBar />
        <SatisfierContainer />
        <NeedContainer />
        {/* render can take a function. Ternary below says if return of loggedIn is true, will show Needs page, otherwise, shows Home page to log in or sign up */}
        {/* <Route
          exact
          path="/"
          render={() => (loggedIn ? <SatisfierContainer /> : <Home />)}
        /> */}
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />

        {/* <Route exact path="/" component={SatisfierContainer} />
        <Route exact path="/Satisfiers/new" component={SatisfierCreate} />*/}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  };
};

export default withRouter(connect(MapStateToProps, { getCurrentUser })(App));
