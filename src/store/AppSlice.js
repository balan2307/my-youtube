import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    status: false,
  },
  reducers: {
    toggleSidebar(state,action) {
        state.status=action.payload
    },
  },
});


export const Appactions=AppSlice.actions;
export default AppSlice.reducer