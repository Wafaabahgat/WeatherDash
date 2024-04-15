import {  createReducer } from "@reduxjs/toolkit";
import { clearErrors, city } from "./HomeAction";
import { Type } from "../../lib/types";

const initialState = {
  status: null,
  errors: {},
  data: [],
  // loading: null,
};

// Create reducer logic using createReducer
const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(city.pending, (state) => {
      // state.loading = true;
      state.data = [];
      state.errors = {};
      state.status = null;
    })
    .addCase(city.fulfilled, (state, action) => {
      // state.loading = false;
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.errors = {};
    })
    .addCase(city.rejected, (state, action) => {
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

export default cityReducer;
