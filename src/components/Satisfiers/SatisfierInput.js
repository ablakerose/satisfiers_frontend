import React from "react";
import { connect } from "react-redux";
import { createSatisfier } from "../../actions/createSatisfier.js";

class SatisfierInput extends React.Component {
  state = { activity: "", value: "" };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      //this function works for both inputs on the form below
      //taking the name and value from the EVENT object and use those key/value pairs to set state
      // the reason we need brackets around the e.tar.name bc within an object can't have periods in key
      // brackets allows that to be read first in entirety and set its as a key
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createSatisfier(this.state);
    // the new state we set with handleChange is passed in as an argument to the createSatisfier
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label> Activity </label>
          <input
            type="text"
            name="activity"
            //the name property must match the state property above so it's saying
            //the name property will be set to the state; which is being set above
            placeholder="Activity"
            value={this.state.activity}
            onChange={this.handleChange}
          />
          <br></br>
          <label> Value </label>
          <input
            type="integer"
            name="value"
            placeholder="Value"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="integer"
            name="user_id"
            placeholder="user_id"
            value={this.state.user_id}
            onChange={this.handleChange}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createSatisfier })(SatisfierInput);
