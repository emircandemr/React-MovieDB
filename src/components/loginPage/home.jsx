import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'
import { useParams } from 'react-router-dom'

function Home() {
  const params = useParams()
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#050e1d]">
      <div className="w-3/4 lg:3/4 h-3/4 flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl ">
      <div className='w-0 lg:w-1/2 h-full  justify-center items-center'>
        <img className='w-full h-full rounded-2xl ' src='https://images.unsplash.com/photo-1651204978999-00d7ce1b078a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80' />
      </div>
      <div className='w-full lg:w-1/2 h-full flex justify-center  items-center '>
        {params.id === "register" ? <Register/> : <Login/>}
      </div>
      </div>

    </div>
  )
}

export default Home