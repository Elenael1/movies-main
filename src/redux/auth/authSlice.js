import { createSlice } from "@reduxjs/toolkit";
import { LogIn, refreshUser, registration } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LogIn.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = { name: payload.name, email: payload.email };
    });
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = { name: payload.name, email: payload.email };
    });
    builder.addCase(refreshUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      const user = payload.find((user) => {
        return user.token === state.token;
      });
      console.log("user", user);
      state.user = user;
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });
  },
});

export const authReducers = authSlice.reducer;
