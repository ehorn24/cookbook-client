import React from "react";
import { Link } from "react-router-dom";

const Login = ({
  userData,
  handleFormChange,
  handleLoginSubmit,
  clearState
}) => {
  return (
    <main className="login-page">
      <h6 className="login-tagline">Welcome back.</h6>
      <div className="form-container">
        <form onSubmit={handleLoginSubmit} className="login-form">
          <fieldset className="login-fieldset">
            <label htmlFor="username" className="field-label">
              <span className="label-span">Username</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleFormChange}
              className="field-input"
            />
            <label htmlFor="password" className="field-label">
              <span className="label-span">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleFormChange}
              className="field-input"
            />
            <button type="submit" className="login-button">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <h4 className="no-account">
        Don't have an account yet?
        <br></br>
        Create one{" "}
        <Link to="/signup" onClick={clearState}>
          here!
        </Link>
      </h4>
      <img
        className="login-picture"
        src="https://www.avantiatibis.com/img/plate.png"
        alt="food"
      />
    </main>
  );
};

export default Login;
