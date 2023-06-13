import { configureStore } from '@reduxjs/toolkit';
import combinedReducers from './combinedReducers';

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
