import { createSlice } from '@reduxjs/toolkit';
import { deselectCat, selectCat } from 'redux/categories/categoriesSlice';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [{
    item_id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
    finishedChap: 16,
    totalChap: 24,
  },
  {
    item_id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    finishedChap: 2,
    totalChap: 25,
  },
  {
    item_id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
    finishedChap: 0,
    totalChap: 24,
  }],
  filteredBooks: [{
    item_id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
    finishedChap: 16,
    totalChap: 24,
  },
  {
    item_id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    finishedChap: 2,
    totalChap: 25,
  },
  {
    item_id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
    finishedChap: 0,
    totalChap: 24,
  }],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: 'Non Classified',
        finishedChap: 0,
        totalChap: 24,
      };
      return ({ ...state, books: [...state.books, newBook] });
    },
    removeBook: (state, action) => (
      { ...state, books: [...state.books.filter((book) => book.item_id !== action.payload)] }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(selectCat, (state, action) => ({
        ...state,
        filteredBooks: [...state.books.filter((book) => book.category === action.payload)],
      }))
      .addCase(deselectCat, (state) => ({
        ...state,
        filteredBooks: [...state.books],
      }));
  },
/*   extraReducers: {
    'categories/selectCat': (state, action) => ({
      ...state,
      filteredBooks: [...state.books.filter((book) => book.category === action.payload)],
    }),
    'categories/deselectCat': (state) => ({
      ...state,
      filteredBooks: [...state.books],
    }),
  } */
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectFilteredBooks = (state) => state.books.filteredBooks;

export default booksSlice.reducer;
