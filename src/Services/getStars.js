export const getStars = username => {
  return fetch(`/api/savedrecipes/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
