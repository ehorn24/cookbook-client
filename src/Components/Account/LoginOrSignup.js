import React from "react";
import { Link } from "react-router-dom";

const LoginOrSignup = () => {
  return (
    <main className="choose-loginsignup">
      <div className="buttons-div">
        <Link to="/signup">
          <button className="choose-signup-button">
            New to CookBook? Let's create an account.
          </button>
        </Link>
        <Link to="/login">
          <button className="choose-login-button">
            Already have an account? Sign in here
          </button>
        </Link>
      </div>
      <img
        src="https://i.ya-webdesign.com/images/food-ingredients-png-2.png"
        alt="ingredients"
        className="loginsignup-picture"
      />
    </main>
  );
};

export default LoginOrSignup;
