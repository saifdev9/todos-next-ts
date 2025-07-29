import { createSlice } from "@reduxjs/toolkit";

type TodoType = {
  id: number;
  description: string;
  quantity: number;
};

type initialstateType = {
  todos: TodoType[];
};

const initialState: initialstateType = {
  todos: [
    {
      id: 4,
      description: "done with lunch",
      quantity: 10,
    },
    {
      id: 1,
      description: "done with dinner",
      quantity: 10,
    },
    {
      id: 2,
      description: "done with drunch",
      quantity: 10,
    },
    {
      id: 3,
      description: "done with breakfast",
      quantity: 10,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeAllTodos(state) {
      state.todos.length = 0;
    },
  },
});

export const { addTodo, removeAllTodos, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
