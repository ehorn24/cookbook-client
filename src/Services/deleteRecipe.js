export const deleteRecipe = id => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/recipe/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
