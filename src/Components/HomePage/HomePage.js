import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main>
      <h1>CookBook - the social network dedicated to food.</h1>
      <Link to="/loginsignup">
        <button>Let's get started.</button>
      </Link>
    </main>
  );
};

export default HomePage;
