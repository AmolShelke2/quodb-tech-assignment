import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const Todos = ({ todos, onDelete }) => {
  const [currentTodoCompleted, setCurrentTodoCompleted] = useState({});

  const handleMarkCompleted = (id) => {
    setCurrentTodoCompleted((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  return (
    <div className="h-[550px] overflow-y-auto px-2 py-4 flex flex-col gap-4 hide-scrollbar">
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-2 border-2">
            <p
              className={`text-gray-700 font-normal text-lg ${
                currentTodoCompleted[todo.id] ? "line-through" : ""
              }`}>
              {todo.item}
            </p>

            <div className="flex gap-4 items-center">
              <button className="cursor-pointer">
                <IoMdCheckmark
                  size={25}
                  onClick={() => handleMarkCompleted(todo.id)}
                />
              </button>
              <button className="cursor-pointer">
                <AiOutlineDelete size={25} onClick={() => onDelete(todo.id)} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg font-normal capitalize">
          No todos found
        </p>
      )}
    </div>
  );
};

export default Todos;
