import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { clearErrors, weather } from "./HomeAction";

const initialState = {
  status: null,
  errors: {},
  data: [],
  // loading: null,
};

// Create reducer logic using createReducer
const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(weather.pending, (state) => {
      // state.loading = true;
      state.data = [];
      state.errors = {};
      state.status = null;
    })
    .addCase(weather.fulfilled, (state, action) => {
      // state.loading = false;
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.errors = {};
    })
    .addCase(weather.rejected, (state, action) => {
      // state.loading = false;
      state.status = null;
      state.errors = action.payload?.errors || action.payload;
    })
    .addCase(clearErrors.fulfilled, (state) => {
      // state.loading = false;
      state.status = null;
      state.errors = {};
    });
});

export default weatherReducer;
