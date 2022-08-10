import React from 'react'
import { useContextMovie } from '../context/ContextApi'

function MovieResultCard(props) {
    const {removeWatched,addMovieWatched} = useContextMovie()
  return (
    <div className='w-9/12 sm:w-80 max-h-[34rem] relative m-3 border-1 bg-gradient-to from-[#000000] to-[#131210ee] text-white border-[#6d58138e] rounded-3xl'>
        <div className='h-96 mt-2 text-center flex justify-center '>
            <img className='rounded-2xl' src={props.img ? `https://image.tmdb.org/t/p/w200${props.img}` : "https://avmmagazin.com/upload/blog/20220401195546-2022nin-en-cok-beklenen-filmleri.jpg"} alt="deneme" />
        </div>
        <div className='h-24 px-2 py-2 text-lg flex flex-col justify-center items-center text-center '>
            <div>
                {props.title}
            </div>
            <div className='pt-1 flex justify-center items-center ' >
                <div className='pr-1'>
                    IMDB - {props.imdb} /
                </div>
                <div>
                    {props.year ? props.year.substring(0,4) : "-"}
                </div>
            </div>
        </div>
        <div className='flex justify-around h-12 items-center '>
            <button className={`px-3 py-1 mb-3 bg-gradient-to-r from-[#a07b025b] to-[#7a62115b] rounded-lg hover:bg-gradient-to-r hover:bg-[#755d2dee] cursor-pointer ${props.opacity}`} disabled={props.active} onClick={()=> {addMovieWatched(props.movie)}}  ><i class="fa-fw far fa-eye"></i></button>
            <div className='px-3 py-1 mb-3  bg-gradient-to-r from-[#a07b025b] to-[#7a62115b] rounded-lg hover:bg-gradient-to-r hover:bg-[#755d2dee] cursor-pointer' onClick={() => {props.remove(props.movie.id)}} ><i class="fa-fw fa fa-times"></i></div>
            
        </div>

    </div>
  )
}

export default MovieResultCard