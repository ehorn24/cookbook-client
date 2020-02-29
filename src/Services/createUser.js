export const createUser = (
  firstname,
  lastname,
  username,
  password,
  profilepicture,
  profilebio
) => {
  return fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify({
      firstname,
      lastname,
      username,
      password,
      profilepicture,
      profilebio
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
