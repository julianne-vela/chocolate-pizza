import React from 'react';
import VanImg from './assets/van-pic.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <img alt='woman with brown hair smiling' src={VanImg} />
                <h1>Vanessa Stevenson</h1>
                <h2>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</h2>
                <button>Share Recipe</button>
            </div>
        )
    }
}