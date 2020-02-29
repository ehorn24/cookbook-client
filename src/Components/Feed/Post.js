import React from "react";
import { Link } from "react-router-dom";

const Post = ({ data, postUser }) => {
  const setRecipePhoto = {
    backgroundImage: `url(${data.recipephoto})`
  };

  const setUserPhoto = {
    backgroundImage: `url(${postUser &&
      postUser[0] &&
      postUser[0].profilepicture})`
  };

  return (
    <div className="post">
      <div className="post-user">
        <div className="post-userphoto-container" style={setUserPhoto}></div>
        <Link to={`/profile/${data.username}`} className="post-username-a">
          <span className="post-username">{data.username}</span>
        </Link>
      </div>
      <Link to={`/recipe/${data.recipename}`}>
        <div style={setRecipePhoto} className="post-recipephoto"></div>
        <h3 className="post-recipename">{data.recipename}</h3>
      </Link>
    </div>
  );
};

export default Post;
