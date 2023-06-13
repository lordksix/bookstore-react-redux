import { configureStore } from '@reduxjs/toolkit';
import booksReducer from 'redux/books/bookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
