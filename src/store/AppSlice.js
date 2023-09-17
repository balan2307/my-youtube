import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
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


export const Appactions=AppSlice.actions;
export default AppSlice.reducer