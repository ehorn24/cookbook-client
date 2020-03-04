import React from "react";
import { Link } from "react-router-dom";

const RecipeThumbnail = ({ recipeName, recipePhoto }) => {
  const setPhoto = {
    backgroundImage: `url(${recipePhoto})`
  };
  return (
    <Link to={`/recipe/${recipeName}`}>
      <div className="recipe-thumbnail">
        <div className="thumbnail-pic-container" style={setPhoto}></div>
        <p className="thumbnail-name">{recipeName}</p>
      </div>
    </Link>
  );
};

export default RecipeThumbnail;
