import React from "react";
import { Link } from "react-router-dom";

const LoginOrSignup = () => {
  return (
    <main>
      <Link to="/signup">
        <button>New to CookBook? Let's create an account.</button>
      </Link>
      <Link to="/login">
        <button>Already have an account? Sign in here</button>
      </Link>
    </main>
  );
};

export default LoginOrSignup;
