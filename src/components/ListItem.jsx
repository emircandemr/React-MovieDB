import React from 'react'
import MovieCard from './MovieCard'

function ListItem() {
  return (
    <div className='min-h-[calc(100vh_-_5rem)] h-full px-36 py-5 flex flex-wrap bg-gradient-to-r from-[#08000d] to-[#0c0523]'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>

    </div>
  )
}

export default ListItem