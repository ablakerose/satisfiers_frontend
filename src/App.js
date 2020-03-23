import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import AddAnActivity from "./components/AddAnActivity.js";
//import DetailContainer from "./container/DetailContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/createSatisfier" component={AddAnActivity} />
          {/* <Route exact path="/activitylist" component={DetailContainer} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
