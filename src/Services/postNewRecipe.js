export const postNewRecipe = (
  username,
  recipename,
  recipephoto,
  ingredients,
  steps
) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/recipe/`, {
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
