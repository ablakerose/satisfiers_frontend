import React from "react";
import { connect } from "react-redux";
import { getMySatisfiers } from "../actions/mySatisfiers.js";
import SatisfierInput from "../components/Satisfiers/SatisfierInput.js";
import Satisfiers from "../components/Satisfiers/Satisfiers.js";

class SatisfierContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.satisfiers);
    this.props.getMySatisfiers();
    //commenting the above out will no longer allow redux to hold this state.
    //the fetch request is necessary to hold the state
  }

  render() {
    //const satisfiers = this.props.satisfiers.map((s, i) => s.activity);

    return (
      <div>
        <div>Satisfier List </div>
        <SatisfierInput /> <br></br>
        <Satisfiers satisfiers={this.props.satisfiers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    satisfiers: state.satisfierReducer.satisfiers
  };
};
export default connect(mapStateToProps, { getMySatisfiers })(
  SatisfierContainer
);
