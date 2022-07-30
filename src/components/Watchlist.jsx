import React from 'react'
import { useContextMovie } from '../context/ContextApi'
import MovieResultCard from './MovieResultCard'

function Watchlist() {
  const {watchList,removeWatchlist} = useContextMovie()

  return (
    <div className='min-h-[calc(100vh_-_5rem)] h-full px-36 py-5 flex flex-wrap bg-gradient-to-r from-[#08000d] to-[#0c0523]'>
    {watchList.length > 0 ? watchList.map((movie) => (
      
      <MovieResultCard title={movie.title} img={movie.poster_path} year={movie.release_date} imdb={movie.vote_average} movie={movie} remove={removeWatchlist} />
      
    
    ) ) : <div className='w-full text-[#aa00ff] text-center flex justify-center items-center text-4xl'> Oops ! Sorry But Watchlist is Empty  </div> } 

      
 </div>
  )
}

export default Watchlist