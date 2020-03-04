export const deleteRecipe = id => {
  return fetch(`/api/recipe/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
