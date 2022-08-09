import { configureStore } from "@reduxjs/toolkit";
import auth from "./authReducer";

const store = configureStore({
    reducer : {
        auth
    }
})

export default store