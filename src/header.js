import React from 'react';
import logo from '../public/logo.png';
import facebook from '../public/fb-icon.png';
import twitter from '../public/twit-icon.png';
import google from '../public/gp-icon.png';
import instagram from '../public/insta-icon.png';
import flickr from '../public/flic-icon.png';
import pinterest from '../public/pint-icon.png';
import rss from '../public/rss-icon.png';
import mail from '../public/mail-icon.png';


export default class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <img alt="fork and knife logo" src={logo}/>
                <h1>Delicious</h1>
                <h2>THE BEST FOOD BLOG ON THE WEB.</h2>
                <section>
                    <img alt="facebook logo" src={facebook}/>
                    <img alt="twitter logo" src={twitter}/>
                    <img alt="google+ logo" src={google}/>
                    <img alt="instagram logo" src={instagram}/>
                    <img alt="flickr logo" src={flickr}/>
                    <img alt="pinterest" src={pinterest}/>
                    <img alt="rss" src={rss}/>
                    <img alt="mail logo" src={mail}/>
                </section>
            </div>
        )
    }
}