import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { Route,Router,Routes } from "react-router-dom";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";


const App = () => {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<ListItem/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
      </div>
   
  )
  
};

export default App;
