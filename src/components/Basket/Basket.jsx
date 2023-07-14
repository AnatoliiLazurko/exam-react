import React, { useContext, useState } from 'react';
import BacketContext from '../../contexts/BasketContext';
import './basketStyle.css';
import BasketItems from './BasketItems';

const Basket = () => {

    const { basketProducts, setBasketProducts } = useContext(BacketContext);

    const totalPrice = basketProducts.reduce((total, product) => total + product.price, 0);

    return (
        <div className='basket'>
            <h2>Basket</h2>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product title</th>
                        <th>Price</th>
                        <th>Amout</th>
                    </tr>
                </thead>
                <tbody>
                    {basketProducts.map(product => (
                        <BasketItems product={product} key={product.id} />
                    ))}
                </tbody>
            </table>
            <h2>Total price: {totalPrice}</h2>
        </div>
    );
}

export default Basket;
