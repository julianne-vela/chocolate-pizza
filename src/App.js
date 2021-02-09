import React from 'react';
import Header from './header.js';
import MainArticle from './image.js';
import RecipeSteps from './recipe-instructions.js';
import IngredientList from './ingredient-list.js';
import Footer from './footer.js';
// import './App.module.css';

export default class App extends React.Component {
  render() {

    return (
      <>
        <Header />
        <MainArticle />
        <RecipeSteps />
        <IngredientList />
        <Footer />
      </>
    );
  }
}