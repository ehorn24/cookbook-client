export const createUser = (firstname, lastname, username, password) => {
  return fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify({ firstname, lastname, username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
