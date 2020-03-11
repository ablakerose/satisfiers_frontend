import React from "react";
import { connect } from "react-redux";
import { fetchNeeds } from "../actions/listNeeds.js";
import Needs from "../components/Needs/Needs.js";

class NeedContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNeeds();
    console.log(this.props.needs);
  }

  render() {
    return (
      <div>
        // <div>Need List </div>
        //
        <Needs needs={console.log(this.props.needs)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //the state is our state from the redux store
  //give this component acces through props to the needs in our state.
  return {
    needs: state.needReducer.needs
  };
};
export default connect(mapStateToProps, { fetchNeeds })(NeedContainer);

//putting fetchNeeds here (or mapping dispatch to props) is connecting
