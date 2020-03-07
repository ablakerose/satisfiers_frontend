import React from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Link } from "react-router-dom";
import NeedsBars from "./bottomContainer/NeedsBars.js";

const Home = ({}) => (
  <div>
    <h4>
      Welcome, <Link to="/signup"> Sign Up </Link> or{" "}
      <Link to="/login"> Log In </Link>
      <NeedsBars />
    </h4>
  </div>
);
export default Home;
