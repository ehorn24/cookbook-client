export const userAuth = (username, password) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/user/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
