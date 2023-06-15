import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deselectCat, selectCat } from 'redux/categories/categoriesSlice';
import { v4 as uuidv4 } from 'uuid';

const GETBOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zd4f6JfPvZOyzdGBNV3e/books';

const initialState = {
  books: [],
  filteredBooks: [],
  isLoading: false,
  error: undefined,
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(GETBOOKS);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error loading');
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (bookInfo, thunkAPI) => {
  try {
    const response = await axios.post(GETBOOKS, bookInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error posting');
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookID, thunkAPI) => {
  try {
    const response = await axios.delete(`${GETBOOKS}/${bookID}`, { item_id: bookID });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error deleting');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.books.push(action.payload);
        state.filteredBooks.push(action.payload);
      },
      prepare(title, author, category) {
        return {
          payload: {
            item_id: uuidv4(),
            title,
            author,
            category,
            finishedChap: 0,
            totalChap: 24,
          },
        };
      },
    },
    removeBook: (state, action) => (
      {
        ...state,
        books: [...state.books.filter((book) => book.item_id !== action.payload)],
        filteredBooks: [...state.books.filter((book) => book.item_id !== action.payload)],
      }
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
      }))
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(postBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(deleteBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBooks.rejected, (state, action) => ({
        state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const books = Object.keys(action.payload).map((key) => {
          const book = action.payload[key][0];
          return {
            item_id: key,
            finishedChap: 0,
            totalChap: 24,
            ...book,
          };
        });
        return {
          ...state,
          isLoading: false,
          books,
          filteredBooks: books,
        };
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        const newBook = {
          item_id: action.meta.arg.item_id,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
          category: action.meta.arg.category,
          finishedChap: 0,
          totalChap: 24,
        };
        return {
          ...state,
          isLoading: false,
          books: [...state.books, newBook],
          filteredBooks: [...state.books, newBook],
        };
      })
      .addCase(deleteBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books.filter((book) => book.item_id !== action.meta.arg)],
        filteredBooks: [...state.books.filter((book) => book.item_id !== action.meta.arg)],
      }));
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
