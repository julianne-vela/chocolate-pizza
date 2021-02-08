import React from 'react';
import Header from './header.js';
import MainArticle from './image.js';
import RecipeSteps from './recipe-instructions.js';
import { Ingredients } from './data.js';
import IngredientList from './ingredient-list.js';

class IngredientItem extends React.Component {
  render() {
    return <div>
      <p>
        {this.props.ingredient.amount} {this.props.ingredient.unit} {this.props.ingredient.name}
      </p>
    </div>
  }
}

export default class App extends React.Component {
  render() {
    const ingredientsList = Ingredients.map(
      ingredientItem => 
      <IngredientItem ingredient={
        ingredientItem
      } />)

    return (
      <>
        <Header />
        <MainArticle />
        <RecipeSteps />
        <IngredientList />
        { ingredientsList }
      </>
    );
  }
}