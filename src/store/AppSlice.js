import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    status: false,
    backdrop:false
  },
  reducers: {
    toggleSidebar(state) {
        state.status=!state.status
    },
    toggleBackdrop(state){
      state.backdrop=!state.backdrop
    }
  },
});


export const Appactions=appSlice.actions;
export default appSlice.reducer