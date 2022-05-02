import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const productRemove = product => {
        const rest = cart.filter(item => item.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        productRemove={productRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Order cart={cart}>
                    <Link to="/shipping">
                        <button>Process Shipping</button>
                    </Link>
                    {/* <button onClick={() => navigate('/login')}>Process Checkout</button> */}
                </Order>
            </div>
        </div>
    );
};

export default Orders;