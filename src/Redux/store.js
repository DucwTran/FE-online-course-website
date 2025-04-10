import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer, // key này dùng trong useSelector để lây state ra
    }
})

export default store;
