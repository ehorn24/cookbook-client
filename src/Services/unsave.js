export const unsave = (recipe_id, user_saved) => {
  return fetch(
    `https://shielded-wave-32873.herokuapp.com/api/savedrecipe/${recipe_id}/${user_saved}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
