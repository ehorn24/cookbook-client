export const editRecipe = (
  id,
  recipename,
  recipephoto,
  ingredients,
  instructions
) => {
  return fetch(`/api/recipe/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      recipename,
      recipephoto,
      ingredients,
      instructions
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
};
