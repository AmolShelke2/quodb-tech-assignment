import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodosReducer";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
