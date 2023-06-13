import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { chekStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
