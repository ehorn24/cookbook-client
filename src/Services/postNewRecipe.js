export const postNewRecipe = (
  username,
  recipename,
  recipephoto,
  ingredients,
  steps
) => {
  return fetch("/api/recipe/", {
    method: "POST",
    body: JSON.stringify({
      username,
      recipename,
      recipephoto,
      ingredients,
      steps
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
