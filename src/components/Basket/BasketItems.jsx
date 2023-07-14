import React from 'react';

const BasketItems = ({ product }) => {
    return (
        <tr>
            <td><img src={product.image} alt={product.title} /></td>
            <td>{product.title}</td>
            <td>Price: {product.price}</td>
            <td>
                <button>-</button>
                1
                <button>+</button>
            </td>
        </tr>
        // {basketProducts.map(product => (
        //                 <BasketItems product={product} key={product.id} />
        //             ))}
    );
}

export default BasketItems;
