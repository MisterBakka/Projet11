import { configureStore } from "@reduxjs/toolkit";
import reducerJs from "../reducer/reducerJs"



const store = configureStore ({
    reducer: {
        profile: reducerJs,
    }
})

export default store;