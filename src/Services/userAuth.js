export const userAuth = (username, password) => {
  return fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
