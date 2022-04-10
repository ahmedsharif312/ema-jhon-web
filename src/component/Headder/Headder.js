import React from 'react';
import Logo from '../../images/Logo.svg';
import './Headder.css'

const Headder = () => {
    return (
        <nav className='nav-bar'>
            <img src={Logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Headder;