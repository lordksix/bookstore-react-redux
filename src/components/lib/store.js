import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const bookLocalStore = (set) => ({
  todos: [],
  addBookItem: (title, category) => {
    const newTodo = {
      id: uuidv4(),
      title,
      category,
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  delTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    }));
  },
});
export const useBookLocalStore = create(
  persist(bookLocalStore, {
    name: 'books',
  })
);