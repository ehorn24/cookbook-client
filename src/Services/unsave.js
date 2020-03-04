export const unsave = (recipe_id, user_saved) => {
  return fetch(`/api/savedrecipe/${recipe_id}/${user_saved}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
