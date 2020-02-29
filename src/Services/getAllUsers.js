export const getAllUsers = username => {
  return fetch("/api/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
