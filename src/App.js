import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createUser } from "./Services/createUser";
import { userAuth } from "./Services/userAuth";
import { Redirect } from "react-router-dom";
import { getAllRecipes } from "./Services/getAllRecipes";
import { getAllUsers } from "./Services/getAllUsers";

import HomePage from "./Components/HomePage/HomePage";
import LoginOrSignup from "./Components/Account/LoginOrSignup";
import Signup from "./Components/Account/Signup";
import Login from "./Components/Account/Login";
import ActivityFeed from "./Components/Feed/ActivityFeed";
import Profile from "./Components/Profile/Profile";
import Navigation from "./Components/HomePage/Navigation";
import Recipe from "./Components/Recipe/Recipe";
import Stars from "./Components/Stars/Stars";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    profilepicture: "",
    loggedin: false,
    redirecttofeed: false,
    recipes: [],
    users: []
  };

  clearState = e => {
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpassword: "",
      loggedin: false,
      redirecttofeed: false,
      recipes: [],
      users: []
    });
  };

  componentDidMount() {
    this.getRecipes();
    this.getUsers();
    if (typeof Storage !== undefined) {
      if (localStorage.getItem("username") !== null) {
        this.setState({
          username: localStorage.getItem("username"),
          loggedin: !!localStorage.getItem("loggedin")
        });
      }
    }
  }

  getRecipes = () => {
    getAllRecipes().then(recipes => {
      this.setState({ recipes });
    });
  };

  getUsers = () => {
    getAllUsers().then(users => {
      this.setState({ users });
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
      confirmpassword,
      profilepicture,
      profilebio
    } = this.state;
    if (password !== confirmpassword) {
      window.alert("Passwords do not match.");
    } else if (password.length < 8) {
      window.alert("Password must be 8 or more characters.");
    } else {
      createUser(
        firstname,
        lastname,
        username,
        password,
        profilepicture,
        profilebio
      );

      this.setState(
        {
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: "",
          profilepicture: "",
          loggedin: true,
          redirecttofeed: true
        },
        () => {
          if (typeof Storage !== "undefined") {
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("loggedin", this.state.loggedin);
          }
        }
      );
    }
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    userAuth(this.state.username, this.state.password).then(res => {
      if (res === "OK") {
        console.log(res);
        this.setState(
          {
            firstname: "",
            lastname: "",
            password: "",
            confirmpassword: "",
            loggedin: true,
            redirecttofeed: true
          },
          () => {
            if (typeof Storage !== undefined) {
              localStorage.setItem("username", this.state.username);
              localStorage.setItem("loggedin", true);
            }
          }
        );
      } else {
        window.alert("Invalid credentials.");
      }
    });
  };

  logOut = e => {
    e.preventDefault();
    this.setState({
      loggedin: false,
      username: ""
    });
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("username") !== "") {
        localStorage.removeItem("username");
      }
      localStorage.removeItem("loggedin");
    }

    window.location.href = "/";
  };

  renderFeed = () => {
    if (this.state.redirecttofeed) {
      return <Redirect to="/feed" />;
    }
  };

  render() {
    return (
      <Router>
        <Navigation
          mode={this.state.loggedin ? "loggedin" : "loggedout"}
          logOut={this.logOut}
          currentUser={this.state.username}
        />
        <Route
          exact
          path="/"
          render={props => (
            <>
              <HomePage {...props} isLoggedIn={this.state.loggedin} />
            </>
          )}
        />
        <Route
          exact
          path="/loginsignup"
          render={props => (
            <>
              <LoginOrSignup {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <>
              <Signup
                userData={this.state}
                handleFormChange={this.handleFormChange}
                handleSignupSubmit={this.handleSignupSubmit}
                clearState={this.clearState}
                {...props}
              />
            </>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <>
              <Login
                userData={this.state}
                handleFormChange={this.handleFormChange}
                handleLoginSubmit={this.handleLoginSubmit}
                clearState={this.clearState}
                {...props}
              />
            </>
          )}
        />
        <div>
          {this.renderFeed()}
          <Route
            exact
            path="/feed"
            render={props => (
              <>
                <ActivityFeed
                  currentUser={this.state.username}
                  recipes={this.state.recipes}
                  allUsers={this.state.users}
                />
              </>
            )}
          />
        </div>
        <Route
          exact
          path="/profile/:username"
          render={props => (
            <>
              <Profile
                {...props}
                currentUser={this.state.username}
                recipes={this.state.recipes}
                users={this.state.users}
              />
            </>
          )}
        />
        <Route
          path="/recipe/:recipename"
          render={props => (
            <>
              <Recipe {...props} showRecipe={this.state.recipes} />
            </>
          )}
        />
        <Route
          path="/profile/:username/stars"
          render={props => <Stars currentUser={this.state.username} />}
        />
      </Router>
    );
  }
}
