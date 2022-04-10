import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
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
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;