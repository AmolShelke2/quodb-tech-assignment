import React, { useState } from "react";

const AddTodos = () => {
  const [todo, setTodo] = useState("");

  const handleTodoOnchange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {};

  return (
    <div className="border-t border absolute bottom-2 w-full px-4 py-2">
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
  );
};

export default AddTodos;
