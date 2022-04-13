import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
const Products = (props) => {
    const { img, name, price, ratings, seller } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Seller: {seller}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Raiting:{ratings} Stars </small></p>
            </div>
            <button onClick={() => props.buttonClicked(props.product)} className='btn-cart'>
                <p>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;