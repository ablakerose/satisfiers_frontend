import React from "react";
import { Field, reduxForm } from "redux-form";
//import Checkbox from "material-ui/Checkbox";
//reduxForm is a function and essentially has the same functionality as connect
//makes sure we can call action creator and get some form data into our component
import { createSatisfier } from "../../actions/createSatisfier.js";
import { connect } from "react-redux";

class SatisfierCreate extends React.Component {
  //destructuring error and touched from meta
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        {/*<input onChange={input.onChange} value={input.value} /> */}
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  // renderCheckbox(props) {
  //   console.log(props);
  //   return (
  //     <div>
  //       <label>{props.label}</label>
  //       <input
  //         checked={props.input.value ? true : false}
  //         onFocus={props.input.onChange}
  //       />
  //     </div>
  //   );
  // }

  onSubmit = formValues => {
    this.props.createSatisfier(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <div className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Satsifier"
          />
        </div>

        {/* <h4> Need(s) Satisfied</h4>
        <div className="ui checkbox">
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Subsistence"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Protection"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Affection"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Understanding"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Participation"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Leisure"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Creation"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Identity"
          />
          <Field
            name="needSatisfied"
            component={this.renderCheckbox}
            label="Freedom"
          />
        </div>

        <h4> Need(s) Violated</h4>
        <div className="ui checkbox">
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Subsistence"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Protection"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Affection"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Understanding"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Participation"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Leisure"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Creation"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Identity"
          />
          <Field
            name="needViolated"
            component={this.renderCheckbox}
            label="Freedom"
          />
        </div> */}
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a satisfier to proceed";
    errors.needSatisfied = "Please select at least one corresponding need";
  }
  return errors;
};

const formWrapped = reduxForm({ form: "satisfierCreate", validate: validate })(
  SatisfierCreate
);

export default connect(null, { createSatisfier })(formWrapped);

//the <Field/> componenet comes imported from redux-form and it shows field to user (some imput)
//textbox, radio button-- always required name prop (the name is the property the field is going to manage)
//redux form is just assuming we're doing the right thing, so we have to return our own input lement
//everytime we add props to a componeent (like adding label='Enter Satisfier' to <Field> componenet above)... redux form
//is going to see that we're going to passed in a prop that it doesn't know what to do with, so the field element by default is going
// to take the prop and pass it hrough to the renderInput function, so we add on additional props to the field element to customize that function
// SO can now pass in the label prop into the renderInput function (he destructured it) in order to reference it.
