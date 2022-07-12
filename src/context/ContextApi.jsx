import { createContext, useContext , useReducer, useState } from "react";


export const GlobalContext = createContext();

export const Context = ({children, reducer}) => {
    
    const [results , setResults] = useState([])

    const initialState = {
        results,
        setResults,
    }

    return (
    <GlobalContext.Provider value={initialState} reducer={useReducer(reducer)}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useContextMovie = () => useContext(GlobalContext) 