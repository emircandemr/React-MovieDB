import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextMovie } from "../context/ContextApi";
import { useSelector } from 'react-redux'
import { logOut } from './loginPage/fire'
import {logout as logoutReducer} from "./loginPage/store/authReducer"
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

function Header() {

  // const [query, setQuery] = useState("");
  const {setResults , setHomeMovie,query, setQuery} = useContextMovie()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)

  const handleLogout = async () => {

      await logOut()
      dispatch(logoutReducer())
      navigate("/home/login" , {
          replace : true
        })
  }   


  const onChange = (e) => {
    setQuery(e.target.value);
    fetch (`https://api.themoviedb.org/3/search/movie?api_key=7c4829680c5dc82e506e4cf962a26187&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results)
        console.log(data)
      }
    })
  }

  const firstMovie = () => {
    fetch ("https://api.themoviedb.org/3/movie/popular?api_key=7c4829680c5dc82e506e4cf962a26187&language=en-US&page=1")
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setHomeMovie(data.results)
      }
    })
  }

  useEffect( () => {
      firstMovie()
  },[])

  return (
    <div className="w-full h-36 xl:h-20 p-3 text-lg flex flex-col xl:flex-row justify-around items-center text-white bg-gradient-to-r from-[#0f0f0f] to-[#131210ee] ">
      <Link to="/"><div className="hover:text-[#aa8c4fee] " onClick={()=>{setQuery("")}} > <i className="fa-solid fa-video"></i> MovieDB</div></Link>
      <div className="flex justify-evenly items-center w-2/3 mb-2 xl:mb-0 xl:w-1/6  ">
        <Link to="/watched"><div className="px-3 py-1 bg-gradient-to-r from-[#a07b025b] to-[#7a62115b]  rounded-lg hover:bg-[#755d2dee] hover:text-white "><i class="fa-fw far fa-eye"></i> Watched </div></Link>
        <Link to="/watchlist"> <div className="px-3 py-1 bg-gradient-to-r from-[#a07b025b] to-[#7a62115b]  rounded-lg hover:bg-[#755d2dee] hover:text-white"><i class="fa-solid fa-square-plus"></i> Watchlist</div></Link>
      </div>
      <div className="flex justify-end items-center w-full md:w-3/4 xl:w-2/5  ">
        <input className="w-3/4 rounded-xl mr-3 text-white px-3 py-1 outline-none bg-[#776c5b88]" value={query} type="text" placeholder="Search for movies or TV shows" onChange={onChange} />
        <div className="flex items-center">
          {user.email ? <span className="text-center ml-2  items-center">{user.email}</span> : ""}
          <div className="px-3 py-1 ml-5 bg-gradient-to-r from-[#a07b025b] to-[#7a62115b]  rounded-lg hover:bg-[#755d2dee] cursor-pointer" onClick={handleLogout}>{user ? "Logout" : "Login" }</div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
//from-[#0e0116] to-[#0c0523ee] 
// bg-[#8b18c49d]