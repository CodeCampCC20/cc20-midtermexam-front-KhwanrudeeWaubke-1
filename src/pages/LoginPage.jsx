import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { schemaLogin } from "../validator/schemaTodo";
import authApi from "../api/authApi";
import useAuthStore from "../stores/authStore";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useTodoStore from "../stores/todoSore";

const initialInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const actionLogin = useAuthStore(state => state.actionLogin)
  const actionGetTodo = useTodoStore(state => state.actionGetTodo)

  const navigate = useNavigate()

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
      schemaLogin.validateSync(input, { abortEarly: false });

      //api
      await actionLogin(input)

      setInput(initialInput);
      await actionGetTodo();

      navigate('/')

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
    <div className="grid place-items-center">
      <div className="w-2/5 bg-gray-700 p-8 rounded-2xl">
        <h1 className="font-bold text-white text-4xl">Welcome</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            className="bg-gray-500 text-white px-4 py-2 w-full rounded-xl outline-0"
            placeholder="username"
            type="username"
            name="username"
          />
          <input
            onChange={handleChange}
            className="bg-gray-500 text-white px-4 py-2 w-full rounded-xl outline-0"
            placeholder="password"
            type="password"
            name="password"
          />
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold cursor-pointer px-4 py-2 w-full rounded-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
