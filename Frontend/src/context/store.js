import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../context/features/userSlice";

export const store = configureStore({
  reducer: authSlice,
});
