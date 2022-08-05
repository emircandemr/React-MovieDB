import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { Route,Router,Routes } from "react-router-dom";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Input from "./components/loginPage/input";
import Register from "./components/loginPage/register";


const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<ListItem/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
      </div>
   
  )
  
};

export default App;
