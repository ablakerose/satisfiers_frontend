import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";

//passing in destructured props to the Login function
const Login = ({ loginFormData, updateLoginForm, login, history }) => {
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
    login(loginFormData, history);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            placeholder="username"
            value={loginFormData.username}
            name="username"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <input
            placeholder="password"
            value={loginFormData.password}
            name="password"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Log In" />
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
    loginFormData: state.loginForm
  };
};

export default connect(mapStateToProps, {
  updateLoginForm: updateLoginForm,
  login: login
})(Login);
