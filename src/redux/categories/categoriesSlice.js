import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Fiction', 'Nonfiction', 'Non Classified', 'Romance'],
  currentCategories: ['Fiction', 'Nonfiction', 'Non Classified', 'Romance'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, categories: 'Under construction' }),
    selectCat: (state, action) => [action.payload],
    deselectCat: (state) => [...state.categories],
  },
});

export const { chekStatus } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectCurrentCategories = (state) => state.categories.currentCategories;

export default categoriesSlice.reducer;
