import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextApi";
import { Reducer } from "./context/Reducer";
import { Provider } from 'react-redux';
import store from './components/loginPage/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Context>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context>
    </Provider>


);
