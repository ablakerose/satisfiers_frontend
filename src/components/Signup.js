import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js";

//passing in destructured props to the Login function
const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            placeholder="name"
            value={signupFormData.name}
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder="username"
            value={signupFormData.username}
            name="username"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <input
            placeholder="password"
            value={signupFormData.password}
            name="password"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

//here is getting these props from the store, then they can be used as props
//this gives me an argument coming to this compoenent that looks like this:
// {
//     username: 'baily'
//     password: 'password'
// }
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  };
};

export default connect(mapStateToProps, {
  updateSignupForm: updateSignupForm,
  signup: signup
})(Signup);
