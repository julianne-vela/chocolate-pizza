import React from 'react';
import { Ingredients } from './data.js';

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

export default class IngredientList extends React.Component {
    render() {
        const ingredientsList = Ingredients.map(
            ingredientItem =>
                <IngredientItem ingredient={
                    ingredientItem
                } />)
        return (
            <div>
                <div style={{
                    backgroundImage: 'url(/list-bg.png)'
                }}>{ingredientsList}</div>
            </div>
        )
    }
}