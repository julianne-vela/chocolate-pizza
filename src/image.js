import React from 'react';
import chocoPizza from './assets/choco-pizza.png';
import printIcon from './assets/print-icon.png';

export default class MainArticle extends React.Component {
    render() {
        return (
            <div>
                <h1>Chocolate Pizza</h1>
                <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
                <img alt='delicious dessert pizza with chocolate candy' src={chocoPizza} />
                <div>
                    <img alt='print icon' src={printIcon} />
                    PRINT
                </div>
            </div>
        )
    }
}