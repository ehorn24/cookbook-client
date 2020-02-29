import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ mode, logOut, currentUser }) => {
  switch (mode) {
    case "loggedout":
      return (
        <nav role="navigation" className=".nav-bar">
          <Link to="/">
            <span className="nav-appname">CookBook.</span>
          </Link>
        </nav>
      );

    case "loggedin":
      return (
        <nav role="navigation" className=".nav-bar">
          <div className="nav-background"></div>
          <div className="menu-toggle">
            <input type="checkbox" className="menu-checkbox" />
            <span className="menu-span first-child"></span>
            <span className="menu-span second-child"></span>
            <span className="menu-span third-child"></span>
            <ul className="hamburger-menu">
              <Link to="/feed">
                <li>Feed</li>
              </Link>
              <Link to={`/profile/${currentUser}`}>
                <li>My Profile</li>
              </Link>
              <Link to="/">
                <li>About CookBook</li>
              </Link>
              <li onClick={logOut}>Sign Out</li>
            </ul>
          </div>
          <Link to="/">
            <h1 className="nav-appname">CookBook.</h1>
          </Link>
        </nav>
      );
    default:
      return (
        <nav className=".nav-bar" role="navigation">
          <Link to="/">
            <span className="nav-appname">CookBook.</span>
          </Link>
        </nav>
      );
  }
};

export default Navigation;
