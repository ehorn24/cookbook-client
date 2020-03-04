import React from "react";
import { Link } from "react-router-dom";
import RecipeThumbnail from "../Thumbnails/RecipeThumbnail";
import UserThumbnail from "../Thumbnails/UserThumbnail";

const SearchResults = ({ userResults, recipeResults }) => {
  return (
    <main className="search-results-page">
      {userResults.length === 0 && recipeResults.length === 0 ? (
        <section>
          <h2 className="search-header">
            Sorry, nothing matched your search terms :( Please check your
            spelling or try searching for something else.
          </h2>
          <div className="search-again">
            <Link to="/feed">Try Again</Link>
          </div>
        </section>
      ) : (
        <section className="display-results">
          <h2 className="search-header">Find what you were looking for?</h2>
          <div className="search-again">
            <Link to="/feed">Try Again</Link>
          </div>
          <div className="results-flexbox">
            {userResults.map((result, i) => {
              console.log(result.profilepicture);
              return (
                <UserThumbnail
                  key={i}
                  userName={result.username}
                  userPhoto={result.profilepicture}
                />
              );
            })}
            {recipeResults.map((result, i) => {
              return (
                <RecipeThumbnail
                  key={i}
                  recipeName={result.recipename}
                  recipePhoto={result.recipephoto}
                />
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default SearchResults;
