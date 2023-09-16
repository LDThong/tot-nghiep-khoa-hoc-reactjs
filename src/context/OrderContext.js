import React, { useState} from "react";

const OrderContext = React.createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState('');
    const [remaining, setRemaining] = useState([]);

    return (
        <OrderContext.Provider value={{order, setOrder, total, setTotal, remaining, setRemaining}}>
            {children}
        </OrderContext.Provider>
    );
};

export {OrderContext, OrderProvider}