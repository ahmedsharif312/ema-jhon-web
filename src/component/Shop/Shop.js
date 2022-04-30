import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getToCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useProducts();
    const [cart, setCart] = useState([]);
    // console.log(cart);

    useEffect(() => {
        const storeCart = getToCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const buttonClicked = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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
                <Order cart={cart}>
                    <Link to="/order">
                        <button>Review Order</button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Shop;