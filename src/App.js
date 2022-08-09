import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./components/ListItem";
import { Route,Router,Routes } from "react-router-dom";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Home from "./components/loginPage/home";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
      <div>
        <Toaster position="top-right"/>
        <Routes>
          <Route path="/home/:id" element={<Home/>} />
          <Route path="/" element={<ListItem/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
      </div>
   
  )
  
};

export default App;
