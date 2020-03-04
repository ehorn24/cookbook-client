export const getSaves = () => {
  return fetch(`/api/savedrecipe/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
