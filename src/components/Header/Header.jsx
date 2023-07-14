import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './headerStyle.css';
import axios from 'axios';
import BacketContext from '../../contexts/BasketContext';

const Header = () => {

    const { basketProducts } = useContext(BacketContext);
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            setCategories(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <header>
            <NavLink to="/">Main</NavLink>
            {categories.map(category => (
                <NavLink key={category} to={`/category/${category}`}>{category}</NavLink>
            ))}
            <NavLink to="/basket"><i class="fa fa-shopping-cart"></i><span>{ basketProducts.length }</span></NavLink>
            
        </header>
    );
}

export default Header;
