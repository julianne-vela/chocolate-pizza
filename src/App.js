import React from 'react';
import Header from './header.js';
import MainArticle from './image.js';
import RecipeSteps from './recipe-instructions.js';
import { Ingredients } from './data.js';
import IngredientList from './ingredient-list.js';
import Footer from './footer.js';
// import './App.module.css';

class IngredientItem extends React.Component {
  render() {
    return <div>
      <input type='checkbox' />
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
        <div style={{
          backgroundImage: 'url(/list-bg.png)'
        }}>{ingredientsList}</div>
        <Footer />
      </>
    );
  }
}