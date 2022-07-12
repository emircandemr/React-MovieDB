import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextApi";
import { Reducer } from "./context/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context reducer={Reducer}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Context>

);
