import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Card from './Card/Card';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([])
    // const [card, setCard] = useState([])
    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {

        const storedCard = getShoppingCart()
        const saveCard = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                const quantity = storedCard[id]
                addedProduct.quantity = quantity
                saveCard.push(addedProduct)
            }
            console.log(addedProduct)
        }
        setCard(saveCard)
    }, [products])

    const addToCard = (product) => {
        const newCard = [...card, product]
        setCard(newCard)
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCard={addToCard}></Product>)
                }
            </div>
            <div className='order-container'>
                <Card card={card}></Card>
            </div>

        </div>
    );
};

export default Shop;