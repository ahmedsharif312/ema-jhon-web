import React from 'react';
import Logo from '../../images/Logo.svg';
import './Headder.css'

const Headder = () => {
    return (
        <nav className='nav-bar'>
            <img src={Logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Headder;