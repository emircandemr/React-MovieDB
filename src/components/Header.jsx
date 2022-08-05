import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextMovie } from "../context/ContextApi";

function Header() {

  const [query, setQuery] = useState("");
  const {results,setResults,addMovieWatchList} = useContextMovie()


  const onChange = (e) => {
    setQuery(e.target.value);
    fetch (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results)
        console.log(data)
      }
    })
  }

  const firstMovie = () => {
    fetch ("https://api.themoviedb.org/3/movie/top_rated?api_key=7c4829680c5dc82e506e4cf962a26187&language=en-US&page=1")
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results)
      }
    })
  }

  if(!query){
    firstMovie()
  }

  return (
    <div className="w-full h-20 p-2 text-lg flex justify-around items-center text-white bg-gradient-to-r from-[#0e0116] to-[#0c0523ee]">
      <Link to="/"><div className="hover:text-[#aa00ff]" onClick={()=>{setQuery("")}} > <i className="fa-solid fa-video"></i> MovieDB</div></Link>
      <div className="flex justify-evenly items-center w-1/6">
        <Link to="/watched"><div className="px-3 py-1 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] hover:text-white "><i class="fa-fw far fa-eye"></i> Watched </div></Link>
        <Link to="/watchlist"> <div className="px-3 py-1 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] hover:text-white"><i class="fa-solid fa-square-plus"></i> Watchlist</div></Link>
      </div>
      <div className="flex justify-around items-center w-2/5">
        <input className="w-3/4 rounded-xl text-white px-3 py-1 outline-none bg-[#635b7788]" value={query} type="text" placeholder="Search for movies or TV shows" onChange={onChange} />
        <div className="flex ml-5 items-center">
          <span className="text-center items-center">emircanndemr@gmail.com</span>
          <div className="px-3 py-1 ml-5 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] cursor-pointer">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
// 