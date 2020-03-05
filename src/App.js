import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createUser } from "./Services/createUser";
import { userAuth } from "./Services/userAuth";
import { Redirect } from "react-router-dom";
import { getAllRecipes } from "./Services/getAllRecipes";
import { getAllUsers } from "./Services/getAllUsers";
import { editProfile } from "./Services/editProfile";
import { getSaves } from "./Services/getSaves";
import { newSave } from "./Services/newSave";
import { postNewRecipe } from "./Services/postNewRecipe";
import { unsave } from "./Services/unsave";
import { deleteRecipe } from "./Services/deleteRecipe";

//components
import HomePage from "./Components/HomePage/HomePage";
import LoginOrSignup from "./Components/Account/LoginOrSignup";
import Signup from "./Components/Account/Signup";
import Login from "./Components/Account/Login";
import ActivityFeed from "./Components/Feed/ActivityFeed";
import Profile from "./Components/Profile/Profile";
import Navigation from "./Components/Navigation/Navigation";
import Recipe from "./Components/Recipe/Recipe";
import Saves from "./Components/Saves/Saves";
import EditProfilePg from "./Components/Profile/EditProfilePg";
import AddRecipe from "./Components/Recipe/AddRecipe";
import SearchResults from "./Components/Search/SearchResults";
import NotAuth from "./Components/Errors/NotAuth";
import DoesntExist from "./Components/Errors/DoesntExist";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    profilepicture: "",
    profilebio: "",
    loggedin: false,
    redirecttofeed: false,
    recipes: [],
    users: [],
    savedrecipes: [],
    searchterm: "",
    usersearchresults: [],
    recipesearchresults: []
  };

  clearState = e => {
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpassword: "",
      profilepicture: "",
      profilebio: "",
      loggedin: false,
      redirecttofeed: false,
      recipes: [],
      users: [],
      savedrecipes: [],
      searchterm: "",
      usersearchresults: [],
      recipesearchresults: []
    });
  };

  componentDidMount() {
    this.getRecipes();
    this.getUsers();
    this.getAllSaves();
    if (typeof Storage !== undefined) {
      if (localStorage.getItem("username") !== null) {
        this.setState({
          username: localStorage.getItem("username"),
          loggedin: !!localStorage.getItem("loggedin"),
          usersearchresults: JSON.parse(
            localStorage.getItem("usersearchresults")
          ),
          recipesearchresults: JSON.parse(
            localStorage.getItem("recipesearchresults")
          )
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //user-related (account, signup/login)
  getUsers = () => {
    getAllUsers().then(users => {
      this.setState({ users });
    });
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
      ).then(res => {
        if (!res.error) {
          this.setState(
            {
              firstname: "",
              lastname: "",
              password: "",
              confirmpassword: "",
              profilepicture: "",
              loggedin: true,
              redirecttofeed: true,
              users: [...this.state.users, res]
            },
            () => {
              if (typeof Storage !== "undefined") {
                localStorage.setItem("username", this.state.username);
                localStorage.setItem("loggedin", this.state.loggedin);
              }
            }
          );
          window.location.href = "/feed";
        } else {
          window.alert(
            "Sorry, looks like something is missing. Please make sure you filled out all the fields."
          );
        }
      });
    }
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    userAuth(this.state.username, this.state.password).then(res => {
      if (res === "OK") {
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
        window.location.href = "/feed";
      } else {
        window.alert("Invalid credentials.");
      }
    });
  };

  logOut = e => {
    e.preventDefault();
    this.clearState();
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("username") !== "") {
        localStorage.removeItem("username");
      }
      localStorage.removeItem("loggedin");
    }
    window.location.href = "/";
  };

  //search-related
  searchForUsers = (arr, query) => {
    let userResult = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        query.some(
          word =>
            JSON.stringify(arr[i].firstname)
              .toLowerCase()
              .includes(word.toLowerCase()) ||
            JSON.stringify(arr[i].lastname)
              .toLowerCase()
              .includes(word.toLowerCase()) ||
            JSON.stringify(arr[i].username)
              .toLowerCase()
              .includes(word.toLowerCase())
        )
      ) {
        userResult.push(arr[i]);
      }
    }
    return userResult;
  };

  searchForRecipes = (arr, query) => {
    let recipeResult = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        query.some(word =>
          JSON.stringify(arr[i].recipename)
            .toLowerCase()
            .includes(word.toLowerCase())
        )
      ) {
        recipeResult.push(arr[i]);
      }
    }
    return recipeResult;
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const searchFor = this.state.searchterm.split(" ");
    const getUsers = this.state.users;
    const getRecipes = this.state.recipes;
    const userResults = this.searchForUsers(getUsers, searchFor);
    const recipeResults = this.searchForRecipes(getRecipes, searchFor);
    this.setState(
      {
        usersearchresults: [...userResults],
        recipesearchresults: [...recipeResults]
      },
      () => {
        if (typeof Storage !== "undefined") {
          localStorage.setItem(
            "usersearchresults",
            JSON.stringify(this.state.usersearchresults)
          );
          localStorage.setItem(
            "recipesearchresults",
            JSON.stringify(this.state.recipesearchresults)
          );
        }
      }
    );
    window.location.href = `/search`;
  };

  //post-recipe related
  getRecipes = () => {
    getAllRecipes().then(recipes => {
      this.setState({ recipes });
    });
  };

  handleRecipeSubmit = (
    username,
    recipename,
    recipephoto,
    [...ingredients],
    [...steps]
  ) => {
    postNewRecipe(
      username,
      recipename,
      recipephoto,
      [...ingredients],
      [...steps]
    ).then(res => {
      if (!res.error) {
        this.setState({
          recipes: [...this.state.recipes, res]
        });
        window.location.href = `/recipe/${recipename}`;
      } else {
        window.alert("Sorry, that didn't post correctly. Please try again.");
      }
    });
  };

  handleDeleteRecipe = id => {
    deleteRecipe(id).then(res => {
      if (!res.error) {
        const recipes = this.state.recipes.filter(r => !(r.id === id));
        this.setState({ recipes });
      }
    });
    window.location.href = `/profile/${this.state.username}`;
  };

  //saved recipe-related
  getAllSaves = () => {
    getSaves().then(sRec => {
      this.setState({ savedrecipes: sRec });
    });
  };

  handleSaveSubmit = (recipe_id, user_saved) => {
    newSave(recipe_id, user_saved).then(res => {
      if (!res.error) {
        this.setState({ savedrecipes: [...this.state.savedrecipes, res] });
      }
    });
  };

  handleDeleteSave = (recipe_id, user_saved) => {
    unsave(recipe_id, user_saved).then(res => {
      if (!res.error) {
        const savedrecipes = this.state.savedrecipes.filter(
          r => !(r.recipe_id === recipe_id && r.user_saved === user_saved)
        );
        this.setState({ savedrecipes });
      }
    });
  };

  //feed-related
  renderFeed = () => {
    if (this.state.redirecttofeed) {
      return <Redirect to="/feed" />;
    }
  };

  //profile-related
  handleEditProfile = (e, id) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      password,
      confirmpassword,
      profilepicture,
      profilebio
    } = this.state;

    if (password && confirmpassword && password !== confirmpassword) {
      window.alert("Passwords do not match.");
    } else if (password && confirmpassword && password.length < 8) {
      window.alert("Password must be 8 or more characters.");
    } else {
      editProfile(
        id,
        firstname,
        lastname,
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
          loggedin: true
        },
        () => {
          if (typeof Storage !== "undefined") {
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("loggedin", this.state.loggedin);
          }
        }
      );
      window.location.href = `/profile/${this.state.username}`;
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
        <Switch>
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
          />{" "}
          {this.state.loggedin ? (
            <>
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
                      handleSearchChange={this.handleFormChange}
                      searchTerm={this.state.searchterm}
                      handleSearchSubmit={this.handleSearchSubmit}
                    />
                  </>
                )}
              />

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
                exact
                path="/recipe/:recipename"
                render={props => (
                  <>
                    <Recipe
                      {...props}
                      currentUser={this.state.username}
                      showRecipe={this.state.recipes}
                      handleSave={this.handleSaveSubmit}
                      allSaves={this.state.savedrecipes}
                      handleDeleteSave={this.handleDeleteSave}
                      handleDeleteRecipe={this.handleDeleteRecipe}
                    />
                  </>
                )}
              />
              <Route
                exact
                path="/profile/:username/saved"
                render={props => (
                  <Saves
                    currentUser={this.state.username}
                    yourSaves={this.state.savedrecipes.filter(
                      s => s.user_saved === this.state.username
                    )}
                    allRecipes={this.state.recipes}
                  />
                )}
              />
              <Route
                exact
                path="/profile/:username/edit"
                render={props => (
                  <EditProfilePg
                    userData={this.state}
                    userId={
                      this.state.users.filter(
                        user => user.username === this.state.username
                      )[0]
                    }
                    handleFormChange={this.handleFormChange}
                    handleEditProfile={this.handleEditProfile}
                  />
                )}
              />
              <Route
                exact
                path="/profile/:username/addrecipe"
                render={props => (
                  <AddRecipe
                    currentUser={this.state.username}
                    handleFormSubmit={this.handleRecipeSubmit}
                  />
                )}
              />
              <Route
                exact
                path="/search"
                render={props => (
                  <SearchResults
                    userResults={this.state.usersearchresults}
                    recipeResults={this.state.recipesearchresults}
                    {...props}
                  />
                )}
              />
            </>
          ) : (
            <Route
              path={[
                "/feed",
                "/profile/:username",
                "/recipe/:recipename",
                "/profile/:username/saved",
                "/profile/:username/edit",
                "/profile/:username/addrecipe",
                "/search/:query"
              ]}
              render={props => <NotAuth />}
            />
          )}
          <Route render={props => <DoesntExist />} />
        </Switch>
      </Router>
    );
  }
}
