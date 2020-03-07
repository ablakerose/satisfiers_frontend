import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import MainContainer from "./components/MainContainer.js";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
//import MyNeeds from "./components/bottomContainer/MyNeeds.js";
import NeedCreate from "./components/bottomContainer/NeedCreate.js";
import NeedEdit from "./components/bottomContainer/NeedEdit.js";
import NeedDelete from "./components/bottomContainer/NeedDelete.js";
import NeedList from "./components/bottomContainer/NeedList.js";
import NeedShow from "./components/bottomContainer/NeedShow.js";

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
        {/* render can take a function. Ternary below says if return of loggedIn is true, will show Needs page, otherwise, shows Home page to log in or sign up */}
        <Route
          exact
          path="/"
          render={() => (loggedIn ? <NeedList /> : <Home />)}
        />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/*<Route exact path="/ my-needs" component={MyNeeds} />
        {/*<Route exact path="/ satisfiers/new" component={MySatisfiers} />
        {/* <Route exact path= "my-needs" component={MySatisfiers}/>  */}
        {/*<Route exact path="/" component={NeedList} />*/}
        <Route exact path="/needs/new" component={NeedCreate} />
        <Route exact path="/needs/edit" component={NeedEdit} />
        <Route exact path="/needs/delete" component={NeedDelete} />
        <Route exact path="/needs/show" component={NeedShow} />
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
