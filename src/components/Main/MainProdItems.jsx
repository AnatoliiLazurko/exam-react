import React from 'react';

const MainProdItems = ({product}) => {
    return (
        <div className="col-sm-3">
            <div className='prod'>
                <img className='prod-img' src={product.image} alt={product.title} />
                <p className='prod-title'>{product.title}</p>
                <div className='prod-info'>
                    <p className='prod-price'>Price: {product.price}</p>
                    <p className='prod-rate'>Rate: {product.rating.rate}</p>
                </div>
                <button className='prod-btn'>Buy</button>
            </div>
        </div>
    );
}

export default MainProdItems;
