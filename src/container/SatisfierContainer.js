import React from "react";
import { connect } from "react-redux";
import { fetchSatisfiers } from "../actions/listSatisfiers.js";
import SatisfierInput from "../components/Satisfiers/SatisfierInput.js";

class SatisfierContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSatisfiers();
  }

  render() {
    return (
      <div>
        <SatisfierInput /> <br></br>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    satisfiers: state.satisfiers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSatisfiers: () => {
      dispatch(fetchSatisfiers());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SatisfierContainer);
