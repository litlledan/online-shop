import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const itemTodo = state.todo.find((todo) => todo.id === action.payload);

      if (itemTodo) {
        itemTodo.completed = !itemTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
