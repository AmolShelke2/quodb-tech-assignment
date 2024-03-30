import { generateRandomId } from "../utils";
import { ADD_TODO, DELETE_TODO } from "./TodoAction";

// Function to initialize state from local storage
const initialState = JSON.parse(localStorage.getItem("todos")) || {
  todos: [
    {
      item: "Thanks for Shortlisting my profile for this position",
      id: generateRandomId(8),
      isCompleted: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newStateAdd = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      localStorage.setItem("todos", JSON.stringify(newStateAdd));
      return newStateAdd;
    case DELETE_TODO:
      const newStateDelete = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      localStorage.setItem("todos", JSON.stringify(newStateDelete));
      return newStateDelete;
    default:
      return state;
  }
};

export default todoReducer;
