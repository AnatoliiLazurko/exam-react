import React, { useContext } from 'react';
import BacketContext from '../../contexts/BasketContext';

const CategoryItems = ({ product }) => {

    const { basketProducts, setBasketProducts } = useContext(BacketContext);

    const addToBascket = () => {
        const isProductInBasket = basketProducts.some(item => item.id === product.id)

        if (isProductInBasket) {
            alert('Product already added!');
            return;
        }
        
        setBasketProducts([...basketProducts, product])
    }

    return (
        <div className="col-sm-3">
            <div className='prod'>
                <img className='prod-img' src={product.image} alt={product.title} />
                <p className='prod-title'>{product.title}</p>
                <div className='prod-info'>
                    <p className='prod-price'>Price: {product.price}</p>
                    <p className='prod-rate'>Rate: {product.rating.rate}</p>
                </div>
                <button className='prod-btn' onClick={addToBascket}>Buy</button>
            </div>
        </div>
    );
}

export default CategoryItems;
