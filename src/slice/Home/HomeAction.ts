import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** country *********** //
export const country = createAsyncThunk("country", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await axios.get(
      "/countries?key=639cbad0-1f7d-4711-bb99-ad5b25657447",
      args
    );
    // console.log(data);

    return data;
  } catch (err) {
    if (err?.response?.data?.message === "Unauthenticated.") {
      return rejectWithValue(err?.response?.data?.message);
    }

    return rejectWithValue(err?.response?.data);
  }
});

// *********** state *********** //
export const state = createAsyncThunk(
  "state",
  async (args: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(args);
      const { data } = await axios.get(
        `/states?country=${args}&key=639cbad0-1f7d-4711-bb99-ad5b25657447`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** cities *********** //
export const city = createAsyncThunk(
  "city",
  async (args: { state: string; country: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `/cities?state=${args.state}&country=${args.country}&key=639cbad0-1f7d-4711-bb99-ad5b25657447`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

// ***********  weather *********** //
export const weather = createAsyncThunk(
  "weather",
  async (args: { state: string; country: string; city: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `/city?city=${args?.city}&state=${args.state}&country=${args.country}&key=639cbad0-1f7d-4711-bb99-ad5b25657447`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("country/clear", async () => {
  return true;
});
