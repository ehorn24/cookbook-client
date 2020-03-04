import React from "react";
import { Link } from "react-router-dom";

const DoesntExist = () => {
  return (
    <div className="doesnt-exist">
      Hmmm... that doesn't look like any working page of ours. Let's go back to
      the <Link to="/">home page.</Link>
    </div>
  );
};

export default DoesntExist;
