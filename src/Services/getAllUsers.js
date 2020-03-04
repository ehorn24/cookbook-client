export const getAllUsers = username => {
  return fetch("/api/user/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
