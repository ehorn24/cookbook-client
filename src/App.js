import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createUser } from "./Services/createUser";
import { userAuth } from "./Services/userAuth";

import HomePage from "./Components/HomePage/HomePage";
import LoginOrSignup from "./Components/Account/LoginOrSignup";
import Signup from "./Components/Account/Signup";
import Login from "./Components/Account/Login";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    loggedIn: false
  };

  clearState = e => {
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpassword: "",
      loggedIn: false
    });
  };

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      username,
      password,
      confirmpassword
    } = this.state;
    if (password !== confirmpassword) {
      window.alert("Passwords do not match.");
    } else if (password.length < 8) {
      window.alert("Password must be 8 or more characters.");
    } else {
      createUser(firstname, lastname, username, password);
      this.setState({
        loggedIn: true,
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: ""
      });
    }
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    userAuth(this.state.username, this.state.password).then(res => {
      if (res === "OK") {
        this.setState({
          loggedIn: true,
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: ""
        });
      }
    });
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <>
              <HomePage {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/loginsignup"
          render={props => <LoginOrSignup {...props} />}
        />
        <Route
          exact
          path="/signup/"
          render={props => (
            <Signup
              userData={this.state}
              handleFormChange={this.handleFormChange}
              handleSignupSubmit={this.handleSignupSubmit}
              clearState={this.clearState}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login
              userData={this.state}
              handleFormChange={this.handleFormChange}
              handleLoginSubmit={this.handleLoginSubmit}
              clearState={this.clearState}
              {...props}
            />
          )}
        />
      </Router>
    );
  }
}
