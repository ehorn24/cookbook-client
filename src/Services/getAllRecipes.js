export const getAllRecipes = () => {
  return fetch("/api/recipes/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
