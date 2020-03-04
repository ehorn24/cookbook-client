import React from "react";
import RecipeThumbnail from "../Thumbnails/RecipeThumbnail";

const Saves = ({ currentUser, yourSaves, allRecipes }) => {
  const matches = yourSaves.map(save => save.recipe_id);
  let savedRecipes = allRecipes.filter(rec => {
    return matches.indexOf(rec.id) !== -1;
  });

  return (
    <main className="saves-page">
      <h1 className="saved-header">Your Saved Recipes</h1>
      <div className="saved-recipes-container">
        {savedRecipes.length >= 1
          ? savedRecipes.map((recipe, i) => {
              return (
                <RecipeThumbnail
                  key={i}
                  recipeName={recipe.recipename}
                  recipePhoto={recipe.recipephoto}
                />
              );
            })
          : "Looks like you haven't saved anything yet :( Time to get cooking!"}
      </div>
    </main>
  );
};

export default Saves;
