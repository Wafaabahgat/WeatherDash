import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { clearErrors, country } from "./HomeAction";
import { Type } from "../../lib/types";

const initialState = {
  status: null,
  errors: {},
  data: [],
  // loading: null,
};



// Create reducer logic using createReducer
const countryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(country.pending, (state) => {
      // state.loading = true;
      state.data = [];
      state.errors = {};
      state.status = null;
    })
    .addCase(country.fulfilled, (state, action) => {
      // state.loading = false;
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.errors = {};
    })
    .addCase(country.rejected, (state, action) => {
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

export default countryReducer;
