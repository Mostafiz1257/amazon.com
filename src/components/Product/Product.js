import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   
    const { name, img, price, seller, ratings
    } = props.product


    const addToCardMama = props.addToCard

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={() => addToCardMama(props.product)} className='add-card'>Add to Card <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;