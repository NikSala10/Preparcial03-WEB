import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserType = "admin" | "user";

type InitialState = {
    userType: UserType;
};

const initialState: InitialState = {
   userType: "user", 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = userSlice.actions;
export default userSlice.reducer;