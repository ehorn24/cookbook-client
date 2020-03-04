import React from "react";
import Post from "./Post";
import SearchBar from "../Search/SearchBar";

const ActivityFeed = ({
  currentUser,
  recipes,
  allUsers,
  handleSearchChange,
  searchTerm,
  handleSearchSubmit
}) => {
  return (
    <main className="feed-page">
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        currentUser={currentUser}
      />
      <div className="feed-post-flexbox">
        {recipes
          .map((recipe, i) => (
            <Post
              data={recipe}
              key={i}
              postUser={allUsers.filter(
                user => user.username === recipe.username
              )}
            />
          ))
          .reverse()}
      </div>
    </main>
  );
};

export default ActivityFeed;
