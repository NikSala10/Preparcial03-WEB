import { configureStore } from "@reduxjs/toolkit";
import  CharacterSlice from "./slices/characterSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    character: CharacterSlice,
    user: userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
