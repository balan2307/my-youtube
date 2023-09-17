import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    status: false,
  },
  reducers: {
    toggleSidebar(state) {
        state.status=!state.status
    },
  },
});


export const Appactions=AppSlice.actions;
export default AppSlice.reducer