import React from "react";
import { connect } from "react-redux";
import { createSatisfier } from "../../actions/createSatisfier.js";

class SatisfierInput extends React.Component {
  state = { activity: "", value: "", need_ids: [] };

  handleCheckedBox = (e) => {
    const value = e.target.value;
    const need_ids = [...this.state.need_ids];
    const index = need_ids.indexOf(value);
    if (index > -1) {
      need_ids.splice(index, 1);
    } else {
      need_ids.push(value);
    }
    this.setState({
      need_ids,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createSatisfier(this.state);

    this.setState({ activity: "", value: "", need_ids: [] });
  };

  renderNeedCheckBoxes = () => {
    return this.props.needs.map((need, i) => {
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
          <label> Time Spent </label>
          <input
            type="integer"
            name="value"
            placeholder="(in hours) i.e. 1.25"
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

const mapStateToProps = (state) => {
  return { needs: state.needs };
};

export default connect(mapStateToProps, { createSatisfier })(SatisfierInput);
