import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Headder.css'

const Headder = () => {
    return (
        <nav className='nav-bar'>
            <img src={Logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Headder;