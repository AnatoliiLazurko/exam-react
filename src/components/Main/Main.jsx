import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainProdItems from './MainProdItems';

const Main = () => {

    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState('all');

    const getCategories = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    const sortProduct = () => {
        if (sortType === 'ratingGrowth') {
            return [...products].sort((a, b) => a.rating.rate - b.rating.rate);
        }
        if (sortType === 'ratingDown') {
            return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
        }
        if (sortType === 'priceGrowth') {
            return [...products].sort((a, b) => a.price - b.price);
        }
        if (sortType === 'priceDown') {
            return [...products].sort((a, b) => b.price - a.price);
        }
        return products;
    }

    return (
        <div className='products'>
            <div>
                <form>
                    <label>Sorting by: </label>
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="all">show all</option>
                        <option value="ratingGrowth">rating growth</option>
                        <option value="ratingDown">rating down</option>
                        <option value="priceGrowth">price growth</option>
                        <option value="priceDown">price down</option>
                    </select>
                </form>
            </div>
            <div className='row'>
                {sortProduct().map(product => (
                    <MainProdItems product={product} key={product.id}/>
                ))}
            </div>
        </div>
    );
}

export default Main;
