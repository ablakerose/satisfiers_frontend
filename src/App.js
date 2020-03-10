import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
//import MainContainer from "./components/MainContainer.js";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import SatisfiersContainer from "./container/SatisfierContainer.js";

//import MySatisfiers from "./components/bottomContainer/MySatisfiers.js";

// import SatisfierCreate from "./components/Satisfiers/SatisfierCreate.js";
// import SatisfierEdit from "./components/Satisfiers/SatisfierEdit.js";
// import SatisfierDelete from "./components/Satisfiers/SatisfierDelete.js";
// import SatisfierContainer from "./container/SatisfierContainer.js";
// import SatisfierShow from "./components/Satisfiers/SatisfierShow.js";

class App extends React.Component {
  componenetDidMount() {
    //  this.props.getCurrentUser();
    //getCurrentUser for authorization than authentication.
    //can call it wherever i need a reference to the currentUser
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="ui container">
        <NavBar />
        <SatisfiersContainer />
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
        <Route exact path="/Satisfiers/new" component={SatisfierCreate} />
        <Route exact path="/Satisfiers/edit" component={SatisfierEdit} />
        <Route exact path="/Satisfiers/delete" component={SatisfierDelete} />
        <Route exact path="/Satisfiers/show" component={SatisfierShow} /> */}
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
