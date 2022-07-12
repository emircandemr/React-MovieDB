import React from 'react'
import { useContextMovie } from '../context/ContextApi'

function Watched() {
  const {results,setResults} = useContextMovie()
  
  return (
    <div>
      Hello World !
    </div>
  )
}

export default Watched