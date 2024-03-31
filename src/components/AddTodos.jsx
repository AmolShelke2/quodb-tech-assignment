import React, { useState } from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import { generateRandomId } from "../utils";
import { addTodo, deleteTodo } from "../redux/TodoAction";

const AddTodos = ({ todos, addTodo, deleteTodo }) => {
  const [todo, setTodo] = useState("");

  const handleTodoOnchange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo === "") {
      window.alert("Please enter a valid todo item");
      return;
    }

    const newTodoItem = {
      item: todo,
      id: generateRandomId(8),
      isCompleted: false,
    };
    addTodo(newTodoItem);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="flex flex-col relative h-fit">
      <div className="border-t border absolute bottom-0 w-full px-4 py-2">
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            className="border-none outline-none w-2/3"
            placeholder="Add Your Todo"
            value={todo}
            onChange={(e) => handleTodoOnchange(e)}
          />

          <button
            onClick={handleAddTodo}
            className="bg-yellow-200 px-8 rounded-lg py-2 hover:bg-yellow-300">
            Add
          </button>
        </div>
      </div>
      <Todos todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo })(AddTodos);
