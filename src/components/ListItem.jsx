import React from 'react'
import { useContextMovie } from '../context/ContextApi'
import MovieCard from './MovieCard'

function ListItem() {

  const {results,setResults} = useContextMovie()


  return (
    <div className='min-h-[calc(100vh_-_5rem)] h-full px-36 py-5 flex flex-wrap bg-gradient-to-r from-[#08000d] to-[#0c0523]'>
      {results.length > 0 ? results.map((movie) => (
        
        <MovieCard title={movie.title} img={movie.poster_path} year={movie.release_date} imdb={movie.vote_average} />
        
      
      ) ) : <div className='w-full text-[#aa00ff] text-center flex justify-center items-center text-4xl'> Oops ! Sory But Movies Not Found  </div> } 

        
   </div>
  )
}

export default ListItem