import React from 'react'

function MovieCard() {
  return (
    <div className='w-80 h-auto max-h-[38rem] m-3 border-1 bg-gradient-to-r from-[#1d032c] to-[#150c31ee] text-white border-[#aa00ff5b] rounded-2xl'>
        <div>
            <img className='rounded-lg' src="https://images.justwatch.com/poster/139452660/s592/the-boys.webp" alt="deneme" />
        </div>
        <div className='px-2 py-2 text-lg flex flex-col justify-center items-center text-center '>
            <div>
                The Croods: A New The Croods: A New Age
            </div>
            <div className='pt-1 flex justify-center items-center ' >
                <div className='pr-3'>
                    IMDB - 6.9
                </div>
                <div>
                    2022
                </div>
            </div>
        </div>
        <div className='flex justify-around h-12 items-center'>
            <div className='px-3 py-1 mb-3  bg-gradient-to-r from-[#311541] to-[#3b2861] rounded-lg hover:bg-[#aa00ff] cursor-pointer'><i class="fa-solid fa-bookmark"></i> Watchlist </div>
            <div className='px-3 py-1 mb-3  bg-gradient-to-r from-[#311541] to-[#3b2861] rounded-lg hover:bg-[#aa00ff] cursor-pointer'><i class="fa-solid fa-thumbs-up"></i> Watched</div>
            
        </div>

    </div>
  )
}

export default MovieCard