// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./slice/authSlice";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const Store = configureStore({
//   reducer: rootReducer,
// });
// export default Store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
// Import other reducers if you have them

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth slice reducer under the 'auth' key
    // Add other reducers if you have them
  },
});

export default store;
