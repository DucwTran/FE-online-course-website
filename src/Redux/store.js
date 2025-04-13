import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReduce from "./userSlice"
const store = configureStore({
    reducer: {
        counter: counterReducer, // key này dùng trong useSelector để lây state ra
        user: userReduce
    }
})

export default store;
