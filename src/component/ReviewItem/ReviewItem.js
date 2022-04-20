import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, productRemove } = props;
    const { name, price, img, quantity, shipping } = product
    return (
        <div className='review-add-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: ${shipping}</p>
                </div>
                <div className="review-delete">
                    <button onClick={() => productRemove(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;