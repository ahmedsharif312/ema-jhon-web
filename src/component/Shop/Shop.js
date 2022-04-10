import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const buttonClicked = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        buttonClicked={buttonClicked}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;