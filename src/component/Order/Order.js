import React from 'react';
import './Order.css'

const Order = ({ cart }) => {
    console.log(cart);
    let price = 0;
    let shipping = 0;
    for (let product of cart) {
        shipping = shipping + product.shipping;
        price = price + product.price;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + shipping + tax;

    return (
        <div className='order'>
            <h4>Order Summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Order;