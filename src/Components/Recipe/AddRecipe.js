import React, { Component } from "react";
import IngredientInput from "./IngredientInput";
import InstructionInput from "./InstructionInput";

export default class AddRecipe extends Component {
  state = {
    recipename: "",
    recipephoto: "",
    ingredients: [""],
    steps: [""]
  };

  addIngredient = e => {
    e.preventDefault();
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, ""]
    }));
  };

  addStep = e => {
    e.preventDefault();
    this.setState(prevState => ({
      steps: [...prevState.steps, ""]
    }));
  };

  deleteIngredient = i => {
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i, 1);
    this.setState({ ingredients });
  };

  deleteStep = i => {
    let steps = [...this.state.steps];
    steps.splice(i, 1);
    this.setState({ steps });
  };

  handleIngredientChange = (key, val) => {
    const ingredients = [...this.state.ingredients];
    ingredients[key] = val;
    this.setState({
      ingredients
    });
  };

  handleStepChange = (key, val) => {
    const steps = [...this.state.steps];
    steps[key] = val;
    this.setState({ steps });
  };

  handleOtherChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <main className="add-recipe-page">
        <h2 className="add-recipe-tagline">Add a recipe!</h2>
        <div className="add-form-container">
          <form
            className="add-recipe-form"
            onSubmit={e => {
              e.preventDefault();
              this.props.handleFormSubmit(
                this.props.currentUser,
                this.state.recipename,
                this.state.recipephoto,
                [...this.state.ingredients],
                [...this.state.steps]
              );
            }}
          >
            <fieldset className="add-recipe-fieldset">
              <label htmlFor="recipename" className="field-label">
                <span className="label-span">Recipe Name</span>
              </label>
              <input
                type="text"
                name="recipename"
                id="recipename"
                className="field-input"
                value={this.state.recipename}
                onChange={this.handleOtherChange}
              />
              <label htmlFor="recipephoto" className="field-label">
                <span className="label-span">Photo URL</span>
              </label>
              <input
                type="text"
                name="recipephoto"
                id="recipephoto"
                className="field-input"
                value={this.state.recipephoto}
                onChange={this.handleOtherChange}
              />
              <label htmlFor="ingredients" className="field-label">
                <span className="label-span">Ingredients:</span>
              </label>
              <IngredientInput
                ingredients={this.state.ingredients}
                handleChange={this.handleIngredientChange}
                handleDelete={this.deleteIngredient}
              />
              <button
                className="add-ingredient-button"
                onClick={this.addIngredient}
              >
                + Add an ingredient
              </button>
              <label htmlFor="instructions" className="field-label">
                <span className="label-span">Instructions:</span>
              </label>
              <InstructionInput
                steps={this.state.steps}
                handleChange={this.handleStepChange}
                handleDelete={this.deleteStep}
              />
              <button className="add-instruction-button" onClick={this.addStep}>
                + Add a step
              </button>
              <button type="submit" className="submit-recipe-button">
                Post recipe
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    );
  }
}
