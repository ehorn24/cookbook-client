import React from "react";
import { Link } from "react-router-dom";

const Signup = ({
  userData,
  handleFormChange,
  handleSignupSubmit,
  clearState
}) => {
  return (
    <main>
      <h3>Create an account!</h3>
      <form onSubmit={handleSignupSubmit}>
        <ul>
          <li>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={handleFormChange}
              value={userData.firstname}
            />
          </li>
          <li>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={handleFormChange}
              value={userData.lastname}
            />
          </li>
          <li>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleFormChange}
              value={userData.username}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleFormChange}
              value={userData.password}
            />
          </li>
          <li>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={handleFormChange}
              value={userData.confirmpassword}
            />
          </li>
        </ul>
        <button type="submit">Create account</button>
      </form>
      <h4>
        Already have an account? Log in{" "}
        <Link to="/login" onClick={clearState}>
          here!
        </Link>
      </h4>
    </main>
  );
};

export default Signup;
