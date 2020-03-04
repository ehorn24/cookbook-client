export const getAllUsers = username => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/user/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
