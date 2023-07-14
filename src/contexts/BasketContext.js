import React, { createContext, useState } from 'react';

const BacketContext = createContext();

export const BasketProvider = ({ children }) => {

    const [basketProducts, setBasketProducts] = useState([]);

    return <BacketContext.Provider value={{basketProducts, setBasketProducts}}>
        { children }
    </BacketContext.Provider>;
}

export default BacketContext;
