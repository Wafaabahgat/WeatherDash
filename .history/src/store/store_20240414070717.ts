import { configureStore } from "@reduxjs/toolkit";
import country from "../slice/Home/home";
import state from "../slice/Home/state";
import city from "../slice/Home/city";
import weather from "../slice/Home/weather";

export const store = configureStore({
  reducer: {
    // Globals
    country: country,
    state: state,
    city: city,
    weather: weather,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
