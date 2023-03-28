import React from 'react';
import './Card.css'
const Card = ({card}) => {
// console.log(card)

let total=0;
let totalShipping=0;
let quantity =0 ;

for(const product of card){
    if(product.quantity === 0){            // solution : 1
        product.quantity = 1 ;
    }
    // product.quantity=product.quantity || 1  // solution : 2
total=total + product.price * product.quantity
totalShipping = totalShipping + product.shipping * product.quantity
quantity = quantity + product.quantity
}

let tax = total*7/100
const grandTotal = tax + total + totalShipping

    return (
        <div className='card'>
             <h3>Order summary</h3>
                <p>Selected Item : {quantity}</p>
                <p>Total Price:$ {total}</p>
                <p>shipping Charge:$ {totalShipping}</p>
                <p>Tax :$ {tax.toFixed(2)}</p>
                <h4>Grand Total :${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Card;