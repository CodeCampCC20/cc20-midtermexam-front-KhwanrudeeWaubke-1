import { create } from "zustand";
import todoApi from "../api/todoApi";

const useTodoStore = create((set) => ({
  todos: [],
  actionGetTodo: async () => {
    const res = await todoApi.getTodos(9)
    console.log('res',res);
    
    set({todos: res.data.todos})
  }
}))

export default useTodoStore