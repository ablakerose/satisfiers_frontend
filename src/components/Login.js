import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";

//passing in destructured props to the Login function
const Login = ({ loginFormData, updateLoginForm, login }) => {
  const handleInputChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        value={loginFormData.username}
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="password"
        value={loginFormData.password}
        name="password"
        type="text"
        onChange={handleInputChange}
      />
      <input type="submit" value="Log In" />
    </form>
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
    loginFormData: state.loginForm
  };
};

export default connect(mapStateToProps, {
  updateLoginForm: updateLoginForm,
  login: login
})(Login);
