import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'
import { useParams } from 'react-router-dom'

function Home() {
  const params = useParams()
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#000000] to-[#131210ee] ">
      <div className="w-full h-full lg:w-3/4 lg:h-3/4 flex justify-center items-center bg-white border-1 border-[#6d58138e] rounded-2xl drop-shadow-2xl ">
      <div className='w-0 lg:w-1/2 h-full  justify-center items-center'>
        <img className='w-full h-full rounded-2xl ' src='https://images.pexels.com/photos/5071340/pexels-photo-5071340.jpeg?cs=srgb&dl=pexels-dids-5071340.jpg&fm=jpg' />
      </div>
      <div className='w-full lg:w-1/2 h-full flex justify-center  items-center '>
        {params.id === "register" ? <Register/> : <Login/>}
      </div>
      </div>

    </div>
  )
}

export default Home

// bg-[#050e1d] 