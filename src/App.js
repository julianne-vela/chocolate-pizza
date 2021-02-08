import React from 'react';
import Header from './header.js';
import MainArticle from './image.js';
import RecipeSteps from './recipe-instructions.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainArticle />
        <RecipeSteps />
      </>
    );
  }
}