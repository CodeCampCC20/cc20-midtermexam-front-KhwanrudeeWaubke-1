import { Rocket } from "lucide-react";
import { useState } from "react";
import { schemaTodo } from "../validator/schemaTodo";
import todoApi from "../api/todoApi";
import ShowTodo from "../components/ShowTodo";
import { toast } from "react-toastify";
import * as Yup from "yup";
import useTodoStore from "../stores/todoSore";
import { useEffect } from "react";

const initialInput = {
  taskName: "",
  userId: 9,
};

function TodoListPage() {
  const actionGetTodo = useTodoStore((state) => state.actionGetTodo);

  useEffect(() => {
    actionGetTodo();
  }, []);

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(input);
      setIsLoading(true);

      //validate
      schemaTodo.validateSync(input, { abortEarly: false });

      //api
      const res = await todoApi.createTodo(input);
      console.log("res", res.data);

      setInput(initialInput);
      actionGetTodo();

      //alert
      toast.success("Create todo success!!");
    } catch (error) {
      console.log(error);
      toast.error("Create todo invalid!!");

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-2">
      <div className="w-2/4 border text-white border-black rounded-3xl p-8 mx-auto bg-black">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Todo</h1>
          <Rocket />
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-1">
          <input
            onChange={handleChange}
            value={input.taskName}
            name="taskName"
            type="text"
            placeholder="newtask"
            className="flex-1 bg-black border-b border-gray-600 outline-0 py-2"
          />
          <button className="border border-blue-50 rounded-xl px-4 py-2 cursor-pointer">
            send
          </button>
        </form>
      </div>

      <ShowTodo />
    </div>
  );
}

export default TodoListPage;
