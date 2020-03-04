import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ mode, logOut, currentUser }) => {
  return (
    <>
      {mode === "loggedin" ? (
        <nav className="loggedin-nav">
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
          <h2 className="loggedin-appname">CookBook.</h2>
        </nav>
      ) : (
        <nav className="loggedout-nav">
          <Link to="/">
            <span className="loggedout-appname">CookBook.</span>
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
