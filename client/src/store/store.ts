import { configureStore } from "@reduxjs/toolkit";
import userReducer from './sclice/userSclice'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});