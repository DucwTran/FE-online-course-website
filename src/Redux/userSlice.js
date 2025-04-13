import { createSlice } from "@reduxjs/toolkit";

const userReduce = createSlice({
  name: "user", // ác định action.type trong Redux DevTools, không ảnh hưởng đến truy xuất state
  initialState: {
    id: 0,
  },
  reducers: {
    loginUser: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { loginUser } = userReduce.actions;
export default userReduce.reducer;
