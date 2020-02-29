import React from "react";
import Post from "./Post";

const ActivityFeed = ({ currentUser, recipes, allUsers }) => {
  return (
    <div className="feed-page">
      {recipes.map((recipe, i) => (
        <Post
          data={recipe}
          key={i}
          postUser={allUsers.filter(user => user.username === recipe.username)}
        />
      ))}
    </div>
  );
};

export default ActivityFeed;
