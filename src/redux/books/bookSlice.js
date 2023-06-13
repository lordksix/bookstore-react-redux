import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.playload.title,
        category: action.playload.category,
      };
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      state.books = [
        ...state.books.filter((book) => book.id !== action.playload.id),
      ];
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
