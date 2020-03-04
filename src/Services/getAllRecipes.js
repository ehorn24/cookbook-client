export const getAllRecipes = () => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/recipe/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
