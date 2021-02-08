import React from 'react';
import listBg from './assets/list-bg.png';


export default class IngredientList extends React.Component {
    render () {
        return (
            <div className='ingredientList'>
                <img src={listBg}></img>
            </div>
        )
    }
}