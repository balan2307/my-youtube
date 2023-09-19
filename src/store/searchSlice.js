
import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
      searches: {},
    },
    reducers: {
      addtoCache(state, action) {
     
 
        state.searches={...state.searches,...action.payload}
     
      },
    },
  });
  
export const searchActions=searchSlice.actions;
export default searchSlice.reducer;