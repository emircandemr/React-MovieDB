import { createContext, useContext , useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";


export const GlobalContext = createContext();

const reducerState = {
    watchList : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

export const Context = ({children}) => {
    
    const [results , setResults] = useState([])
    
    const [state,dispatch] = useReducer(Reducer,reducerState);

    useEffect(() => {
        
        localStorage.setItem("watchlist", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));

      },[state])
    
    const addMovieWatchList = (movie) => {
        dispatch({
            type:"Add_Movie_Watchlist",
            payload : movie
        })
    }

    const addMovieWatched = (movie) => {
        dispatch({
            type:"Add_Movie_Watched",
            payload : movie
        })
    }

    const removeWatched = (id) => {
        dispatch ({
            type:"Remove_Movie_Watched",
            payload : id
        })
    }
    const removeWatchlist = (id) => {
        dispatch ({
            type:"Remove_Movie_Watchlist",
            payload : id
        })
    }
    
    const initialState = {
        results,
        setResults,
        addMovieWatchList,
        addMovieWatched,
        watchList : state.watchList,
        watched : state.watched,
        removeWatched,
        removeWatchlist
    }

    return (
    <GlobalContext.Provider value={initialState}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useContextMovie = () => useContext(GlobalContext) 