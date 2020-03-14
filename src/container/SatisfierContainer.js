import React from "react";
import { connect } from "react-redux";
import { getMySatisfiers } from "../actions/mySatisfiers.js";
import SatisfierInput from "../components/Satisfiers/SatisfierInput.js";
//import Satisfiers from "../components/Satisfiers/Satisfiers.js";
//import SatisfierCreate from "../components/Satisfiers/SatisfierCreate.js";

class SatisfierContainer extends React.Component {
  componentDidMount() {
    this.props.getMySatisfiers();
    //commenting the above out will no longer allow redux to hold this state.
    //the fetch request is necessary to hold the state
  }

  render() {
    //const satisfiers = this.props.satisfiers.map((s, i) => s.activity);

    return (
      <div>
        <div> </div>
        <SatisfierInput /> <br></br>
        {/*<Satisfiers satisfiers={this.props.satisfiers} />*/}
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
    getMySatisfiers: () => {
      dispatch(getMySatisfiers());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SatisfierContainer);
