import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({
  showRecipe,
  match,
  handleSave,
  currentUser,
  allSaves,
  handleDeleteSave,
  handleDeleteRecipe
}) => {
  const currentRecipe = showRecipe.filter(
    r => r.recipename === match.params.recipename
  );

  const getWhoSaved = allSaves.filter(s => s.recipe_id === currentRecipe[0].id);
  const didCurrentUserSave =
    getWhoSaved.filter(save => save.user_saved === currentUser).length === 1
      ? true
      : false;

  return (
    <main className="recipe-page">
      {currentRecipe.map((rec, i) => {
        return (
          <div key={i}>
            <h1 className="recipe-title">{rec.recipename} </h1>
            <p className="recipe-username">
              <Link to={`/profile/${rec.username}`}>by {rec.username}</Link>
            </p>

            {didCurrentUserSave ? (
              <button
                className="save-button"
                onClick={e => {
                  e.preventDefault();
                  handleDeleteSave(rec.id, currentUser);
                }}
              >
                Saved ✓
              </button>
            ) : (
              <button
                className="save-button"
                onClick={e => {
                  e.preventDefault();
                  handleSave(rec.id, currentUser);
                }}
              >
                Save
              </button>
            )}

            <div
              className="recipe-photo-container"
              style={{ backgroundImage: `url(${rec.recipephoto})` }}
            ></div>
            {currentUser === rec.username ? (
              <div className="editdelete-flexbox">
                <button
                  className="delete-recipe-button"
                  onClick={e => {
                    e.preventDefault();
                    handleDeleteRecipe(rec.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ) : null}
            <div className="ing-ins-container">
              <h4 className="ingredients-title">Ingredients</h4>
              <ul className="ingredients-list">
                {rec.ingredients.map((ing, x) => (
                  <li key={x} className="ingredients-li">
                    {ing}
                  </li>
                ))}
              </ul>
              <h4 className="instructions-title">Instructions</h4>
              <ol className="instructions-list">
                {rec.steps.map((step, y) => (
                  <li key={y} className="instructions-li">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Recipe;
