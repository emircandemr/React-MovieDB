import React from 'react'
import { useContextMovie } from '../context/ContextApi'
import Header from './Header'
import MovieResultCard from './MovieResultCard'

function Watchlist() {
  const {watchList,removeWatchlist} = useContextMovie()

  return (
    <>
    <Header/>
    <div className='min-h-[calc(100vh_-_5rem)] h-full px-12 sm:px-20 py-5 flex flex-wrap justify-center  bg-gradient-to-r from-[#030303] to-[#050505ee]'>
      {watchList.length > 0 ? watchList.map((movie) => (
        
        <MovieResultCard title={movie.title} img={movie.poster_path} year={movie.release_date} imdb={movie.vote_average} movie={movie} remove={removeWatchlist} />
        
      
      ) ) : <div className='w-full text-yellow-600 text-center flex justify-center items-center text-4xl'> Oops ! Sorry But Watchlist is Empty  </div> } 

      
    </div>
    </>

  )
}

export default Watchlist