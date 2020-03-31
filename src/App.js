import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import NeedsDisplay from "./components/NeedsDisplay.js";
import AddAnActivity from "./components/AddAnActivity.js";
import NeedContainer from "./container/NeedContainer.js";
import Home from "./Home.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/needs" component={NeedsDisplay} />
          <Route exact path="/about" component={About} />
          <Route exact path="/satisfier/new" component={AddAnActivity} />
          <Route exact path="/needs/:id" component={NeedContainer} />
          {/* <Route exact path="/needs/1/info" component={ProtectionComponent} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
