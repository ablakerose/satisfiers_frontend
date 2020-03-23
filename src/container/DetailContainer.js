import React from "react";
import { connect } from "react-redux";
import { fetchNeeds } from "../actions/listNeeds.js";

class DetailContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNeeds();
  }

  render() {
    return (
      <div>
        <h2> Satisfiers </h2>
        <div>
          {props.needs.map((need, i) => (
            <div key={i}>
              <div className="item">
                <NeedCard need={need} />
              </div>
            </div>
          ))}
        </div>
        {/* {this.props.needs.map((need, i) => (
          <ul>
            <h4>{need.name}</h4>
            {need.satisfiers.map((satisfier, i) => (
              <li key={i}>{satisfier.activity}</li>
            ))}
          </ul>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //the state is our state from the redux store
  //give this component acces through props to the needs in our state.
  return {
    needs: state.needs
  };
};
export default connect(mapStateToProps, { fetchNeeds })(DetailContainer);

//putting fetchNeeds here (or mapping dispatch to props) is connecting
