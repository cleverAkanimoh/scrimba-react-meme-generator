import React from 'react';
import logo from '../reactjs-icon-2.svg';

const Header = () => (
    <header>
        <div>
            <img src={logo} className="logo" alt="logo" id="header-img" />
            <h3>Meme Generator</h3>
        </div>
        <h4>React Course - Project 3</h4>
    </header>
    );

export default Header;