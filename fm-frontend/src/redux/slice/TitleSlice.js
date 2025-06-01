import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
  name: 'titleHeader',
  initialState: {
    title: '',
  },
  reducers: {
    updateTitleHeader: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { updateTitleHeader } = titleSlice.actions;
export default titleSlice.reducer;
