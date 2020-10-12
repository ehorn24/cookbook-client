import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Login from "./Components/Account/Login";
import LoginOrSignup from "./Components/Account/LoginOrSignup";
import Signup from "./Components/Account/Signup";
import DoesntExist from "./Components/Errors/DoesntExist";
import NotAuth from "./Components/Errors/NotAuth";
import ActivityFeed from "./Components/Feed/ActivityFeed";
import Post from "./Components/Feed/Post";
import HomePage from "./Components/HomePage/HomePage";
import Navigation from "./Components/Navigation/Navigation";
import EditProfilePg from "./Components/Profile/EditProfilePg";
import AddRecipe from "./Components/Recipe/AddRecipe";
import IngredientInput from "./Components/Recipe/IngredientInput";
import InstructionInput from "./Components/Recipe/InstructionInput";
import Recipe from "./Components/Recipe/Recipe";
import Saves from "./Components/Saves/Saves";
import SearchBar from "./Components/Search/SearchBar";
import SearchResults from "./Components/Search/SearchResults";
import RecipeThumbnail from "./Components/Thumbnails/RecipeThumbnail";
import UserThumbnail from "./Components/Thumbnails/UserThumbnail";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Login", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("LoginOrSignup", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginOrSignup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Signup", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("DoesntExist Error", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DoesntExist />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("NotAuth Error", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NotAuth />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("ActivityFeed", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ActivityFeed />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Post", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Post />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Homepage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Navigation", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("EditProfilePg", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditProfilePg />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Profile", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Profile />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("AddRecipe", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddRecipe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("IngredientInput", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<IngredientInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("InstructionInput", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InstructionInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Recipe", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Recipe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Saves", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Saves />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("SearchBar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("SearchResults", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchResults />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("RecipeThumbnail", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RecipeThumbnail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("UserThumbnail", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserThumbnail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
