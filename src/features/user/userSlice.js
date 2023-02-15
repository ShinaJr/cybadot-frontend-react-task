import { createSlice } from "@reduxjs/toolkit";
import Users from "./../../data.js";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [...Users],
  },
  reducers: {
    deleteUser: (state, action) => {
      //   console.log("Hii" + action.payload.id);
      //filtering out all items
      const removeUser = state.user.filter(
        (user) => user.id !== action.payload.id
      );
      state.user = removeUser;
      //state.user.pop(action.payload.id);
      // state.user.splice(action.payload.id, 2);
    },
  },
});
export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
