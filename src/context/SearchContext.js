import React, { useState } from "react";

const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState([]);
    const [product, setProduct] = useState([]);

    return (
        <SearchContext.Provider value={{search, setSearch, product, setProduct}}>
            {children}
        </SearchContext.Provider>
    )
};

export {SearchProvider, SearchContext}