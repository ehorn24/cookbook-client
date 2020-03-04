export const createUser = (
  firstname,
  lastname,
  username,
  password,
  profilepicture,
  profilebio
) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/user/`, {
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
