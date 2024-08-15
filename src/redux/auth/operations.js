import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://667157cde083e62ee43b293f.mockapi.io/api/v1/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const LogIn = createAsyncThunk("auth/logIn", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post("users", user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registration = createAsyncThunk(
  "auth/signUp",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("users", user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (token, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue("login another one");
    }
    try {
      //users/me
      setAuthHeader(persistedToken);
      const { data } = await axios.get("users");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
