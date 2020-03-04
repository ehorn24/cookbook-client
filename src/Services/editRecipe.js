export const editRecipe = (
  id,
  recipename,
  recipephoto,
  ingredients,
  instructions
) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/recipe/${id}`, {
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
