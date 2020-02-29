import React from "react";
import { Link } from "react-router-dom";

const RecipeThumbnail = ({ recipeName, recipePhoto }) => {
  return (
    <Link to={`/recipe/${recipeName}`}>
      <div className="recipe-thumbnail">
        <div className="thumbnail-pic-container">
          <img src={recipePhoto} alt="recipe" className="thumbnail-pic" />
        </div>
        <p className="thumbnail-name">{recipeName}</p>
      </div>
    </Link>
  );
};

export default RecipeThumbnail;
