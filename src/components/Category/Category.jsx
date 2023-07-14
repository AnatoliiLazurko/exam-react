import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './categoryStyle.css';
import CategoryItems from './CategoryItems';

const Category = () => {

    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState('all');

    const getProducts = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
            setProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [categoryName])

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
                    <CategoryItems product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Category;
