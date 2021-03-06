import React, { useReducer, createContext } from 'react';
import { reducer } from '../reducer/Reducer';

export const initialState = {
    todo: { list: ["TodoList"], item: {} },
    listF: { list: ["grupoList"], item: {}}
}

const Store = createContext(initialState)

export const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>
}

export default Store;