import React from "react";
import { Link } from "react-router-dom";

const Signup = ({
  userData,
  handleFormChange,
  handleSignupSubmit,
  clearState
}) => {
  return (
    <main className="signup-page">
      <h3 className="signup-tagline">Create an account and get cookin'.</h3>
      <div className="form-container">
        <form onSubmit={handleSignupSubmit} className="signup-form">
          <fieldset className="signup-fieldset">
            <label htmlFor="firstname" className="field-label">
              <span className="label-span">First Name</span>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={handleFormChange}
              value={userData.firstname}
              className="field-input"
            />
            <label htmlFor="lastname" className="field-label">
              <span className="label-span">Last Name</span>
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={handleFormChange}
              value={userData.lastname}
              className="field-input"
            />
            <label htmlFor="username" className="field-label">
              <span className="label-span">Username</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleFormChange}
              value={userData.username}
              className="field-input"
            />
            <label htmlFor="password" className="field-label">
              <span className="label-span">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleFormChange}
              value={userData.password}
              className="field-input"
            />
            <label htmlFor="confirmpassword" className="field-label">
              <span className="label-span">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={handleFormChange}
              value={userData.confirmpassword}
              className="field-input"
            />
            <label htmlFor="profilepicture" className="field-label">
              <span className="label-span">Profile Picture</span>
            </label>
            <input
              type="text"
              name="profilepicture"
              id="profilepicture"
              onChange={handleFormChange}
              value={userData.profilepicture}
              className="field-input"
            />
            <label htmlFor="profilebio" className="field-label">
              <span className="label-span">Bio</span>
            </label>
            <input
              type="text"
              name="profilebio"
              id="profilebio"
              onChange={handleFormChange}
              value={userData.profilebio}
              className="field-input"
            />
            <button type="submit" className="signup-button">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <h4 className="have-account">
        Already have an account? Log in{" "}
        <Link to="/login" onClick={clearState}>
          here!
        </Link>
      </h4>
    </main>
  );
};

export default Signup;
