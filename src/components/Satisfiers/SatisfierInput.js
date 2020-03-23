import React from "react";
import { connect } from "react-redux";
import { createSatisfier } from "../../actions/createSatisfier.js";

class SatisfierInput extends React.Component {
  state = { activity: "", value: "", need_ids: [] };

  handleCheckedBox = e => {
    const value = e.target.value;
    const need_ids = [...this.state.need_ids];
    const index = need_ids.indexOf(value);
    // console.log("value", value);
    // console.log("need_ids", need_ids);
    // console.log("index", index);
    if (index > -1) {
      need_ids.splice(index, 1);
    } else {
      need_ids.push(value);
    }
    this.setState({
      need_ids
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      //this function works for both inputs on the form below
      //using the NAME property of the form below-- name of the input (name="activity" or name="(satisifer)value")
      //taking the name and value from the EVENT object and use those key/value pairs to set state
      // the reason we need brackets around the e.tar.name bc within an object can't have periods in key
      // brackets allows that to be read first in entirety and set its as a key
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createSatisfier(this.state);
    // the new state we set with handleChange is passed in as an argument to the createSatisfier
    //the createSatisfier has a placeholder argumetn "satisfier". We're invoking the function here and using this.state as argument
    this.setState({ activity: "", value: "", need_ids: [] });
    //this resets the form values back to empty after submitting the form
  };

  renderNeedCheckBoxes = () => {
    return this.props.needs.map((need, i) => {
      //iterate over this.props.needs
      //in map, return  a checkbox input that contains that need's name and id
      return (
        <div key={i}>
          <label htmlFor={need.name}>{need.name}</label>
          <input
            name={need.name}
            type="checkbox"
            value={need.id}
            onChange={this.handleCheckedBox}
          />
        </div>
      );
    });
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
          <br></br>
          <label> Value </label>
          <input
            type="integer"
            name="value"
            placeholder="Value"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br></br>Select Associated Needs <br></br>
          {this.renderNeedCheckBoxes()}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { needs: state.needs };
};

export default connect(mapStateToProps, { createSatisfier })(SatisfierInput);
