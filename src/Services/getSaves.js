export const getSaves = () => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/savedrecipe/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
