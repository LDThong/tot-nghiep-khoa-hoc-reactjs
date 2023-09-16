import React, { useState } from "react";

const HomeContext = React.createContext();

const HomeProvider = ({ children }) => {
    const [list ,setList] = useState([])
    return (
        <HomeContext.Provider value={{list, setList}}>
            {children}
        </HomeContext.Provider>
    )
};

export { HomeProvider, HomeContext };