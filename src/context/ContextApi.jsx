import { createContext, useContext , useReducer, useState } from "react";
import Reducer from "./Reducer";


export const GlobalContext = createContext();

const reducerState ={
    watchList : [],
    watched : [],
};

export const Context = ({children}) => {
    
    const [results , setResults] = useState([])

    const initialState = {
        results,
        setResults,
    }
    
    const [state,dispatch] = useReducer(Reducer,reducerState)

    return (
    <GlobalContext.Provider value={initialState}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useContextMovie = () => useContext(GlobalContext) 