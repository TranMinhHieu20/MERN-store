import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
