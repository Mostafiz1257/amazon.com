import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, price,  seller, ratings
    } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button className='add-card'>Add to Card</button>
        </div>
    );
};

export default Product;