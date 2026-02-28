import react from 'react';
import { createContext } from 'react';
import {menShops} from '../assets/menShops'

export const productDataContext = createContext();

export const DataProvider = ({ children }) => {

    const menShopspage = menShops;
    return (
        <productDataContext.Provider value={menShopspage}>
            {children}
        </productDataContext.Provider>
    )
}