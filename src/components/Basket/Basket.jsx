import React, { useContext, useState } from 'react';
import BacketContext from '../../contexts/BasketContext';
import './basketStyle.css';
import BasketItems from './BasketItems';

const Basket = () => {

    const { basketProducts, setBasketProducts } = useContext(BacketContext);
    const [amount, setAmount] = useState(1);

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
                        <tr>
                        <td><img src={product.image} alt={product.title} /></td>
                        <td>{product.title}</td>
                        <td>Price: {product.price}</td>
                        <td>
                            <button>-</button>
                            {amount}
                            <button>+</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total price: {totalPrice}</h2>
        </div>
    );
}

export default Basket;
