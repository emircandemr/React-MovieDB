import React from 'react'
import { useContextMovie } from '../context/ContextApi'
import Header from './Header'
import MovieCard from './MovieCard'

function ListItem() {

  const {results,homeMovie,query} = useContextMovie()


  return (
    <>
    <Header/>
    <div className='min-h-[calc(100vh_-_5rem)] h-full px-10 sm:px-20 py-5 flex flex-wrap justify-center items-center bg-gradient-to-r from-[#030303] to-[#050505ee]  '>

      {query.length > 0 ? results.map((movie) => (
        
        <MovieCard title={movie.title} img={movie.poster_path} year={movie.release_date} imdb={movie.vote_average} movie={movie} />
        

      ) ) : homeMovie.map((movie) => (
        
        <MovieCard title={movie.title} img={movie.poster_path} year={movie.release_date} imdb={movie.vote_average} movie={movie} />))  } 

  
    </div>
    </>

  )
}
// <div className='w-full text-[#aa00ff] text-center flex justify-center items-center text-4xl'> Oops ! Sory But Movies Not Found  </div>
//bg-[#050e1d] 
// from-[#08000d] to-[#0c0523]
export default ListItem