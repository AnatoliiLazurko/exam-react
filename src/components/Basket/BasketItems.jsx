import React, { useState } from 'react';

const BasketItems = ({ product }) => {

    const [amount, setAmount] = useState(1);

    return (
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
    );
}

export default BasketItems;
