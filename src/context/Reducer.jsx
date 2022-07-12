import { useState } from "react"
import { useContextMovie } from "./ContextApi";



export const Reducer = (action) => {
    
    const {results,setResults} = useContextMovie()

    switch (action.type) {
        case "deneme":
            
            break;
    
        default:
            break;
    }
}
