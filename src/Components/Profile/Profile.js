import React from "react";
import { Link } from "react-router-dom";
import RecipeThumbnail from "../Thumbnails/RecipeThumbnail";

const Profile = ({ currentUser, recipes, users, match }) => {
  const userRecipes = recipes.filter(
    recipe => recipe.username === match.params.username
  );
  const isCurrentUser = currentUser === match.params.username;
  const whoseProfile = users.filter(
    user => user.username === match.params.username
  );

  return (
    <main className="profile-page">
      <section className="profile-info">
        {whoseProfile.map((info, i) => {
          return (
            <div key={i}>
              <h3 className="profile-username">{info.username}</h3>
              <div
                className="profile-pic-container"
                style={{ backgroundImage: `url(${info.profilepicture})` }}
              ></div>
              <h4 className="profile-name">
                {info.firstname} {info.lastname}
              </h4>
              <p className="profile-bio">{info.profilebio}</p>
              {isCurrentUser ? (
                <div className="current-user-buttons">
                  <div className="edit-profile-button">
                    <Link to={`/profile/${currentUser}/edit`}>
                      ✎ Edit Profile
                    </Link>
                  </div>
                  <div className="saved-recipes-button">
                    <Link to={`/profile/${currentUser}/saved`}>My Saves</Link>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </section>
      <section className="profile-recipes">
        <h4 className="recipes-head">
          My Recipes{" "}
          {isCurrentUser ? (
            <div className="add-recipe-container">
              <Link
                to={`/profile/${currentUser}/addrecipe`}
                className="add-recipe-button"
              >
                + New Recipe
              </Link>
            </div>
          ) : null}
        </h4>

        <div className="recipes-flexbox">
          {userRecipes.map((recipe, i) => (
            <RecipeThumbnail
              key={i}
              recipeName={recipe.recipename}
              recipePhoto={recipe.recipephoto}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
