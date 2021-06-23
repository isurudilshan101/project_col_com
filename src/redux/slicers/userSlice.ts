import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface for the userSlice initial state
interface iUserSliceState {
  user: [];
}

const initialState: iUserSliceState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<[]>) => {
      state.user = [...state.user, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
