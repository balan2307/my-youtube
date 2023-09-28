import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    status: false,
    backdrop: false,
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  },
  reducers: {
    toggleSidebar(state) {
      state.status = !state.status;
    },
    toggleBackdrop(state) {
      state.backdrop = !state.backdrop;
    },
    toggledarkMode(state) {
      const newDarkMode = !state.darkMode;

      console.log("toggle")
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));

      state.darkMode = newDarkMode;
    },
  },
});

export const Appactions = appSlice.actions;
export default appSlice.reducer;
