import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getToCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);  // do pages count how many mage you want, it starts from 0 
    const [page, setPage] = useState(0);  // this is page change witch page you are, it start from 0
    const [size, setSize] = useState(10); // how many product you want to show in size, it is depended on your product

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size${size}`) // this is query system
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const page = Math.ceil(count / 10);
                setPageCount(page);
            })
    }, [])

    useEffect(() => {
        const storeCart = getToCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const buttonClicked = (selectedProduct) => {
        const exist = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        buttonClicked={buttonClicked}
                    ></Products>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                    }

                    <select onChange={event => setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
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