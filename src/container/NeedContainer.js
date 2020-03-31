import React from "react";
import { connect } from "react-redux";
import { fetchNeed } from "../actions/setNeed.js";
import SatisfierDetails from "../components/Needs/SatisfierDetails.js";

class NeedContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNeed(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h2> Satisfiers for {this.props.need.name} </h2>
        <ul>
          {this.props.need.name && <SatisfierDetails need={this.props.need} />}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    need: state.need
  };
};
export default connect(mapStateToProps, { fetchNeed })(NeedContainer);
