import React from 'react';
import logo from './assets/logo.png';
import facebook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import google from './assets/gp-icon.png';
import instagram from './assets/insta-icon.png';
import flickr from './assets/flic-icon.png';
import pinterest from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';
import style from './App.module.css';



export default class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <img alt="fork and knife logo" src={logo} />
                <h1>Delicious</h1>
                <h2>THE BEST FOOD BLOG ON THE WEB.</h2>
                <section>
                    <img alt="facebook logo" src={facebook} />
                    <img alt="twitter logo" src={twitter} />
                    <img alt="google+ logo" src={google} />
                    <img alt="instagram logo" src={instagram} />
                    <img alt="flickr logo" src={flickr} />
                    <img alt="pinterest" src={pinterest} />
                    <img alt="rss" src={rss} />
                    <img alt="mail logo" src={mail} />
                </section>
            </div>
        )
    }
}