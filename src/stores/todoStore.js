import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const useTodoStore = create(
  devtools(
    persist((set) => ({
      todos: [],

      addTodo: (todo) => {
        set((state) => ({
          todos: [...state.todos, todo],
        }));
      },

      checkTodo: (todo) => {
        set((state) => ({
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === todo.id) {
              return { ...item, done: !todo.done };
            } else {
              return item;
            }
          }),
        }));
      },

      modifyTodo: (todo) => {
        set((state) => ({
          ...state,
          todos: state.todos.filter((todo) => {
            const newTodo = todo;
            return newTodo;
          }),
        }));
      },

      deleteTodo: (id) => {
        set((state) => ({
          ...state,
          todos: state.todos.filter((todo) => {
            return todo.id !== id;
          }),
        }));
      },
    }))
  )
);
export default useTodoStore;
