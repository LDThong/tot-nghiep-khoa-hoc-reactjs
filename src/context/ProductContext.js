import React, { useState, createContext } from "react";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    return (
        <ProductContext.Provider value={{product, setProduct}}>
            {children}
        </ProductContext.Provider>
    )
};

export {ProductProvider, ProductContext}