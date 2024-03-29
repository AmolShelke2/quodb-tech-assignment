import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const Todos = () => {
  return (
    <div className="h-[450px] overflow-y-auto px-2 py-4 flex flex-col gap-4 hide-scrollbar">
      <div className="flex items-center justify-between p-2 border-2">
        <p>Wake Up</p>

        <div className="flex gap-4 items-center">
          <button className="cursor-pointer">
            <IoMdCheckmark size={25} />
          </button>
          <button className="cursor-pointer">
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
