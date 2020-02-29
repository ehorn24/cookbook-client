import React from "react";

const Recipe = ({ showRecipe, match }) => {
  const currentRecipe = showRecipe.filter(
    r => r.recipename === match.params.recipename
  );
  return (
    <main className="recipe-page">
      {currentRecipe.map(rec => {
        return (
          <>
            <h1 className="recipe-title">{rec.recipename} </h1>
            <p className="recipe-username">by {rec.username}</p>
            <div className="recipe-photo-container">
              <img
                src={rec.recipephoto}
                alt="recipe"
                className="recipe-photo"
              />
            </div>
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
              {rec.instructions.map((inst, y) => (
                <li key={y} className="instructions-li">
                  {inst}
                </li>
              ))}
            </ol>
          </>
        );
      })}
    </main>
  );
};

export default Recipe;
