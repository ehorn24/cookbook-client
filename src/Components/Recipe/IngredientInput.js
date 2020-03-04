import React from "react";

const IngredientInput = ({ ingredients, handleChange, handleDelete }) => {
  return ingredients.map((i, key) => {
    let ingredientId = `ingredient-${i}`;
    return (
      <div key={key}>
        <label htmlFor={ingredientId}></label>
        <input
          type="text"
          name={ingredientId}
          id={ingredientId}
          className="field-input"
          value={i}
          placeholder={`Ingredient ${key + 1}`}
          onChange={e => handleChange(key, e.target.value)}
        />
        <button
          className="x-button"
          onClick={e => {
            e.preventDefault();
            handleDelete(i);
          }}
        >
          X
        </button>
      </div>
    );
  });
};

export default IngredientInput;
