import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "../Redux/HomePageReducer";

const store = configureStore({
    reducer : {
        habitReducer
    }
})

export default store;