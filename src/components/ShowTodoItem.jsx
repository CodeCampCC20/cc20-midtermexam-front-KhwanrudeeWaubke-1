import React from "react";
import { useState } from "react";
import todoApi from "../api/todoApi";
import { X } from "lucide-react";

function ShowTodoItem({ item, actionGetTodo, handleDelete }) {
  const [input, setInput] = useState({
    completed: item.completed || false,
    taskName: item.taskName || "",
  });

  const handleChange = async (e) => {
    try {
      const { checked } = e.target;

      console.log('checked', checked)
      const data = {
        completed: checked,
        taskName: item.taskName,
      };

      await todoApi.updateTodo(item.id, 9, data);
      actionGetTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-1">
      <div className="flex items-center">
        <input type="checkbox" checked={item.completed}  onChange={handleChange} />
        <p className={`${item.completed ? "line-through" : "no-underline"}`}>{item.taskName}</p>
      </div>
      <X
        onClick={() => handleDelete(item.id)}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
}

export default ShowTodoItem;
