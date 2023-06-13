import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [{
    item_id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.playload.title,
        author: action.playload.author,
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

export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
