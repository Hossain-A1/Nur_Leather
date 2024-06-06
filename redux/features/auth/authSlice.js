import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAndToken = action.payload;
      toast.success("Login has successfully!");
    },

    logout: (state) => {
      toast.success("Logout has successfully!");
      state.userAndToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
