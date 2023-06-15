import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deselectCat, selectCat } from 'redux/categories/categoriesSlice';
import { v4 as uuidv4 } from 'uuid';

const GETBOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qYH4IkyRgswDCxmNVl7g/books';

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
  booksAPI: [],
  isLoading: false,
  error: undefined,
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(GETBOOKS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (bookInfo, thunkAPI) => {
  try {
    const response = await axios.post(GETBOOKS, bookInfo);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookID, thunkAPI) => {
  try {
    const response = await axios.post(`${GETBOOKS}/${bookID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

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
      }))
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(postBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const booksAPI = Object.keys(action.payload).map((key) => {
          const book = action.payload[key][0];
          return {
            item_id: key,
            category: 'Non Classified',
            finishedChap: 0,
            totalChap: 24,
            ...book,
          };
        });
        return {
          ...state,
          booksAPI,
        };
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBook = {
          id: action.meta.arg.item_id,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
          category: action.meta.arg.category,
          finishedChap: 0,
          totalChap: 24,
        };
        return ({ ...state, booksAPI: [...state.books, newBook] });
      })
      .addCase(deleteBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        return {
          ...state,
          booksAPI: [...state.booksAPI.filter((book) => book.item_id !== action.meta.arg)],
        };
      });
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectFilteredBooks = (state) => state.books.filteredBooks;

export default booksSlice.reducer;
