import { configureStore } from "@reduxjs/toolkit";
import country from "../slice/Home/home";
import state from "../slice/Home/state";
import city from "../slice/Home/city";
import weather from "../slice/Home/weather";
import authSlice from "../redux/slice/authSlice";

export const store = configureStore({
  reducer: {
    // Globals
    country: country,
    state: state,
    city: city,
    weather: weather,
    authSlice:authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
