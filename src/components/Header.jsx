import React from "react";
import Logo from "./logo.png";

function Header() {
  return (
    <div className="w-full h-20 p-2 text-lg flex justify-around items-center text-white bg-gradient-to-r from-[#0e0116] to-[#0c0523ee]">
      <div className=""> <i className="fa-solid fa-video"></i> MovieDB</div>
      <div className="flex justify-evenly items-center w-1/6">
        <div className="px-3 py-1 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] cursor-pointer"><i class="fa-solid fa-puzzle-piece"></i> Watched</div>
        <div className="px-3 py-1 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] cursor-pointer"><i class="fa-solid fa-square-plus"></i> Watchlist</div>
      </div>

      <div className="flex justify-around items-center w-2/5">
        <input className="w-3/4 rounded-xl text-white px-3 py-1 outline-none bg-[#635b7788]" type="text" placeholder="Search for movies or TV shows" />
        <div className="flex">
          <div className="px-3 py-1 mr-5 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] cursor-pointer">Sign Up</div>
          <div className="px-3 py-1 bg-[#8b18c49d] rounded-lg hover:bg-[#aa00ff] cursor-pointer">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
