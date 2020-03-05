export const editProfile = (
  id,
  firstname,
  lastname,
  password,
  profilepicture,
  profilebio
) => {
  return fetch(`https://shielded-wave-32873.herokuapp.com/api/user/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      firstname,
      lastname,
      password,
      profilepicture,
      profilebio
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
