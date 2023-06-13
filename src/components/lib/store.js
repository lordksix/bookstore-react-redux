import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const bookLocalStore = (set) => ({
  books: [],
  addBookItem: (title, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    set((state) => ({
      books: [...state.books, newBook],
    }));
  },
  delBook: (id) => {
    set((state) => ({
      books: state.books.filter((book) => book.id !== id),
    }));
  },
});
const useBookLocalStore = create(
  persist(bookLocalStore, {
    name: 'books',
  }),
);

export default useBookLocalStore;
