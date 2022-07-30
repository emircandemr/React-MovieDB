import React from 'react'

function Reducer(state,action) {
    switch (action.type) {
        case "Add_Movie_Watchlist":
            return {
                ...state,
                watchList : [action.payload , ...state.watchList]
            }
        case "Add_Movie_Watched":
            return {
                ...state,
                watchList : state.watchList.filter( (movie) => movie.id !== action.payload.id),
                watched : [action.payload ,  ...state.watched]
            }
        case "Remove_Movie_Watched":
            return {
                ...state,
                watched : state.watched.filter( (movie) => movie.id !== action.payload)
            }
        case "Remove_Movie_Watchlist":
            return {
                ...state,
                watchList : state.watchList.filter( (movie) => movie.id !== action.payload)
            }
        default:
            return state
    }
}

export default Reducer