import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("todos");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
