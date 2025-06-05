import React from "react";
import useTodoStore from "../stores/todoSore";
import { X } from "lucide-react";
import todoApi from "../api/todoApi";
import { toast } from "react-toastify";

function ShowTodo() {
  const todos = useTodoStore((state) => state.todos);
    const actionGetTodo = useTodoStore((state) => state.actionGetTodo);

  console.log("todos", todos);

  const handleDelete = async (id) => {
    try {
      await todoApi.deleteTodo(id, 9);
      actionGetTodo()

      toast.success("delete success !!")
    } catch (error) {
      toast.error("delete invalid !!")
      console.log(error);
    }
  };
  return (
    <div className="w-2/4 border text-white border-black rounded-3xl p-8 mx-auto bg-black">
      {todos.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-1">
          <div className="flex items-center">
            <input type="checkbox" />
            <p>{item.taskName}</p>
          </div>
          <X onClick={() => handleDelete(item.id)} className="w-4 h-4 cursor-pointer" />
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
