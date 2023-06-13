import { combineReducers } from 'redux';
import bookSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const combinedReducers = combineReducers({
  books: bookSlice,
  categories: categoriesSlice,
});

export default combinedReducers;
