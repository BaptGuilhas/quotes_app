import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: Math.trunc(Math.random()*15),
  };
  
  
export const idxerSlice = createSlice({
    name: 'idx_nameSlice',
    initialState,

    reducers: {
      shuffle: (state) => {

        state.value = Math.trunc(Math.random()*15);
      }
    }
})

export const {shuffle} = idxerSlice.actions;

export const selectIdxer = (state) => state.idx_nameSlice.value;

export default idxerSlice.reducer;