export const getAllRecipes = () => {
  return fetch("/api/recipe/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
