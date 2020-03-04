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
        <h4 className="how-to-use-head">How to use CookBook:</h4>
        <div className="how-to-use">
          <p>
            Click the "Let's get started" button up at the top of the page. The
            easy-to-use interface will ask you if you want to create an account
            or log in to an existing one. To create an account, just enter some
            basic information, pick a username and password, select a photo URL
            (if you want to choose a picture from your device, please upload to
            a third-party service like Imgur and get a URL), and write a bio.
          </p>
          <p>
            If you don't want to create an account, no problem. We've set up a
            user for you to test out CookBook with. Just log in with these
            credentials:
            <br></br>
            Username: bobsmith
            <br></br>
            Password: iambobsmith
          </p>
          <p>Now get cookin'!</p>
        </div>
        <img
          className="homepage-bottom-picture"
          src="https://frontierenaturalmeats.com/wp-content/themes/frontiere/images/hero-meat.png"
          alt="ingredients"
        />
      </section>
    </main>
  );
};

export default HomePage;
