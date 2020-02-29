import React from "react";
import { Link } from "react-router-dom";
const HomePage = ({ isLoggedIn }) => {
  return (
    <main className="homepage">
      <section className="intro">
        <h3 className="heading">
          COOKING CAN BE HARD ENOUGH. FINDING A RECIPE SHOULDN'T BE.
        </h3>
        <h4 className="tagline">
          Join the social network dedicated to the one thing that really matters
          - food (and how to make it).
        </h4>

        {!isLoggedIn ? (
          <Link to="/loginsignup">
            <button className="getstarted-button">Let's get started.</button>
          </Link>
        ) : (
          <Link to="/feed">
            <button className="getstarted-button">Find some recipes!</button>
          </Link>
        )}

        <img
          src="https://assets.hellofresh.com/us/cms/plans/VeggieJumble-Recipe-700x700.png"
          alt="ingredients"
          className="homepage-picture"
        />
      </section>
      <section className="landing">
        <h4 className="desc-heading">
          Welcome to <span className="title">CookBook.</span>
        </h4>
        <p className="app-desc">
          CookBook was built to make your life easier in the kitchen. Create a
          profile and have access to thousands of other recipes from people just
          like you. Save recipes you tried and loved, or save them to try later.
          Post your own recipe and share it with the world. Have your cookbook,
          and everyone else's, right in your hand.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
