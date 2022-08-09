import { createContext, useContext , useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'


export const GlobalContext = createContext();

const reducerState = {
    watchList : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

export const Context = ({children}) => {
    
    const {user} = useSelector(state => state.auth)

    const [results , setResults] = useState([])
    
    const [state,dispatch] = useReducer(Reducer,reducerState);

    useEffect(() => {
        
        localStorage.setItem("watchlist", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));

      },[state])
    
    const addMovieWatchList = (movie) => {
        if(user){
            dispatch({
                type:"Add_Movie_Watchlist",
                payload : movie
            })
            toast.success("You have successfully added")
        }
        else{
            toast.error("You Must Login !")

        }
       

    }

    const addMovieWatched = (movie) => {
        if(user){
            dispatch({
                type:"Add_Movie_Watched",
                payload : movie
            })
            toast.success("You have successfully added")
        }
        else{
            toast.error("You Must Login !")
        }
    }

    const removeWatched = (id) => {
        dispatch ({
            type:"Remove_Movie_Watched",
            payload : id
        })
        toast.success("You have successfully remove")
    }
    const removeWatchlist = (id) => {
        dispatch ({
            type:"Remove_Movie_Watchlist",
            payload : id
        })
        toast.success("You have successfully remove")
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