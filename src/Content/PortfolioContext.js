import React, { createContext, useContext, useReducer } from 'react';
import Data from './data.json';



const PortfolioContext = createContext();
const initialState = {
    data: Data
}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const PortfolioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PortfolioContext.Provider value={{ state, dispatch }}>
            {children}
        </PortfolioContext.Provider>
    );
};

const usePortfolioContext = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolioContext must be used within a PortfolioProvider');
    }
    return context;
}

export { PortfolioProvider, usePortfolioContext };
