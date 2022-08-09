import React from 'react'
import { useContextMovie } from '../context/ContextApi'

function MovieCard(props) {
  const {addMovieWatchList,addMovieWatched,watchList,watched} = useContextMovie();

  const storedMovie = watchList.find( (o) => o.id === props.movie.id) || watched.find( (o) => o.id === props.movie.id) 
    
  return (
    <div className='group ease-in-out w-72 max-h-[34rem] relative m-3 border-1 bg-gradient-to from-[#000000] to-[#131210ee]  text-white border-[#6d58138e] rounded-3xl'>
        <div className='h-96 mt-2 text-center flex justify-center '>
            <img className='rounded-2xl' src={props.img ? `https://image.tmdb.org/t/p/w200${props.img}` : "https://cdn2.vectorstock.com/i/1000x1000/53/36/vintage-cinema-poster-vector-20815336.jpg"} alt="deneme" />
        </div>
        <div className='h-24 px-2 py-2 text-lg flex  flex-col justify-center items-center text-center '>
            <div className=''>
               {props.title}
            </div>
            <div className='pt-1 flex justify-center items-center ' >
                <div className='pr-1'>
                    <span className=''>IMDB</span>  - {props.imdb} /
                </div>
                <div>
                    {props.year ? props.year.substring(0,4) : "-"}
                </div>
            </div>
        </div>
        <div className='flex justify-around  h-12 items-center '>
            <button disabled={storedMovie} className={`px-3 py-1 mb-3  bg-gradient-to-r from-[#a07b025b] to-[#7a62115b] rounded-lg hover:bg-gradient-to-r  ${storedMovie ? "opacity-30" : "cursor-pointer hover:bg-[#755d2dee]"} `} onClick={()=> {addMovieWatchList(props.movie)}}  ><i className="fa-solid fa-bookmark text-yellow-600"></i> Watchlist </button>
            <button disabled={storedMovie} className={`px-3 py-1 mb-3  bg-gradient-to-r from-[#a07b025b] to-[#7a62115b] rounded-lg hover:bg-gradient-to-r  ${storedMovie ? "opacity-30" : "cursor-pointer hover:bg-[#755d2dee]"} `} onClick={() => {addMovieWatched(props.movie)}}><i className="fa-solid fa-thumbs-up text-yellow-600"></i> Watched</button>
            
        </div>

    </div>
  )
}
// from-[#000000] to-[#131210ee]
// from-[#311541] to-[#3b2861]

export default MovieCard