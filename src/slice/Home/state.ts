import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { clearErrors, state } from "./HomeAction";
import { Type } from "../../lib/types";

const initialState = {
  status: null,
  errors: {},
  data: [],
  // loading: null,
};

// Create reducer logic using createReducer
const statesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(state.pending, (state) => {
      // state.loading = true;
      state.data = [];
      state.errors = {};
      state.status = null;
    })
    .addCase(state.fulfilled, (state, action) => {
      // state.loading = false;
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.errors = {};
    })
    .addCase(state.rejected, (state, action) => {
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

export default statesReducer;
