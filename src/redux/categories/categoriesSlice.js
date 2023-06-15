import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Fiction', 'Nonfiction', 'Non Classified', 'Romance'],
  currentCategories: ['Fiction', 'Nonfiction', 'Non Classified', 'Romance'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCat: (state, action) => ({ ...state, currentCategories: [action.payload] }),
    deselectCat: (state) => ({ ...state, currentCategories: [...state.categories] }),
  },
});

export const { selectCat, deselectCat } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectCurrentCategories = (state) => state.categories.currentCategories;

export default categoriesSlice.reducer;
