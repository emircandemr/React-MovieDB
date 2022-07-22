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
                watched : [action.payload , ...state.watched]
            }
        default:
            return state
    }
}

export default Reducer