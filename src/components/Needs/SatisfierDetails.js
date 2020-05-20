import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InlineEdit from "react-edit-inline2";

class SatisfierDetails extends React.Component {
  state = {};

  dataChanged = (activity, id) => {
    const data = { satisfier: activity };
    return fetch(`http://localhost:3001/api/v1/satisfiers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((satisfier) => satisfier);
  };

  render() {
    return (
      <div>
        <Link to="/needs" exact className="item">
          <i className="angle left icon"></i>
          Back to Needs
        </Link>

        <div>
          <ul>
            {this.props.need.satisfiers.map((satisfier, i) => (
              <li key={i} name={satisfier.activity}>
                <InlineEdit
                  text={satisfier.activity}
                  paramName="activity"
                  change={(data) => this.dataChanged(data, satisfier.id)}
                  placeholder="edit activity"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { need: state.need };
};

export default connect(mapStateToProps)(SatisfierDetails);
