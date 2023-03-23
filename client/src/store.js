import { configureStore } from "@reduxjs/toolkit";
import { paymentReducer } from "./App";

// Create a Redux store with the payment reducer
export const store = configureStore({
  reducer: paymentReducer,
});
