import React from "react";
import { Link } from "react-router-dom";

const Login = ({
  userData,
  handleFormChange,
  handleLoginSubmit,
  clearState
}) => {
  return (
    <main>
      <div>
        <h6>Sign in!</h6>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={userData.username}
            onChange={handleFormChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleFormChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>
          Don't have an account yet? Create one{" "}
          <Link to="/signup" onClick={clearState}>
            here!
          </Link>
        </h4>
      </div>
    </main>
  );
};

export default Login;
