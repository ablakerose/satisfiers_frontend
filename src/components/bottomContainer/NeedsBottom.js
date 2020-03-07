import React, { Component } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import NeedsCard from "../components/NeedsCard";
//import { bindActionCreators } from "redux";

class Needs extends Component {
  render() {
    const needs = this.props.needs.map((q, i) => {
      return (
        <MyNeeds
          key={i}
          need={q}
          //   upvoteQuote={this.props.upvoteQuote}
          //   downvoteQuote={this.props.downvoteQuote}
          //   removeQuote={this.props.removeQuote}
        />
      );
    });
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Needs</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{needs}</div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {
    needs: state.needs
  };
};

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(Needs);
