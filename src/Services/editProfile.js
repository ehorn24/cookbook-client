export const editProfile = (
  id,
  firstname,
  lastname,
  password,
  profilepicture,
  profilebio
) => {
  return fetch(`/api/user/${id}`, {
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
  });
};
