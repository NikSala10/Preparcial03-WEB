// redux/slices/userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  name: string;
  role: "admin" | "user";
};

type InitialState = {
  user: User | null;
};

const initialState: InitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
   setUserRole: (state, action: PayloadAction<"admin" | "user">) => {
    if (state.user) {
        state.user.role = action.payload;
    }
},
  },
});

export const { setUser, setUserRole } = userSlice.actions;
export default userSlice.reducer;
