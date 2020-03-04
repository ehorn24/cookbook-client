import React from "react";
import { Link } from "react-router-dom";

const NotAuth = () => {
  return (
    <div className="not-auth-page">
      You need to be logged in to access this page! Please{" "}
      <Link to="/login">log in</Link> or{" "}
      <Link to="/signup">create an account.</Link>
    </div>
  );
};

export default NotAuth;
