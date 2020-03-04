import React from "react";
import { Link } from "react-router-dom";

const UserThumbnail = ({ userName, userPhoto }) => {
  const setPhoto = {
    backgroundImage: `url(${userPhoto})`
  };
  return (
    <Link to={`/profile/${userName}`}>
      <div className="user-thumbnail">
        <div className="user-pic-container" style={setPhoto}></div>
        <p className="user-name">@{userName}</p>
      </div>
    </Link>
  );
};

export default UserThumbnail;
