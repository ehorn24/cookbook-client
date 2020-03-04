import React from "react";

const EditProfilePg = ({
  handleFormChange,
  handleEditProfile,
  userData,
  userId
}) => {
  return (
    <main className="edit-profile-page">
      <h1 className="edit-profile-tagline">
        Edit any part of your profile here.
      </h1>
      <div className="edit-form-container">
        <form
          onSubmit={e => {
            handleEditProfile(e, userId.id);
          }}
          className="edit-profile-form"
        >
          <fieldset className="edit-profile-fieldset">
            <label htmlFor="firstname" className="field-label">
              <span className="label-span">First Name</span>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={handleFormChange}
              value={userData.firstname}
              className="field-input"
            />
            <label htmlFor="lastname" className="field-label">
              <span className="label-span">Last Name</span>
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={handleFormChange}
              value={userData.lastname}
              className="field-input"
            />
            <label htmlFor="password" className="field-label">
              <span className="label-span">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleFormChange}
              value={userData.password}
              className="field-input"
            />
            <label htmlFor="confirmpassword" className="field-label">
              <span className="label-span">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={handleFormChange}
              value={userData.confirmpassword}
              className="field-input"
            />
            <label htmlFor="profilepicture" className="field-label">
              <span className="label-span">Profile Picture</span>
            </label>
            <input
              type="text"
              name="profilepicture"
              id="profilepicture"
              onChange={handleFormChange}
              value={userData.profilepicture}
              className="field-input"
            />
            <label htmlFor="profilebio" className="field-label">
              <span className="label-span">Bio</span>
            </label>
            <textarea
              type="text"
              name="profilebio"
              id="profilebio"
              onChange={handleFormChange}
              value={userData.profilebio}
              className="field-input"
            ></textarea>
            <button type="submit" className="edit-profile-button">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default EditProfilePg;
