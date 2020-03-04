export const newSave = (recipe_id, user_saved) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/savedrecipe/`, {
    method: "POST",
    body: JSON.stringify({ recipe_id, user_saved }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
