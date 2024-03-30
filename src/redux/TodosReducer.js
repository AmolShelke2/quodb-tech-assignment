import { generateRandomId } from "../utils";
import { ADD_TODO, DELETE_TODO } from "./TodoAction";

const initialState = {
  todos: [
    {
      item: "Wake Up",
      id: generateRandomId(8),
      isCompleted: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
