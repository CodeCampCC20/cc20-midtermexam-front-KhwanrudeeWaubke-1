import React from "react";

function RegisterPage() {
  return (
    <div className="grid place-items-center">
      <div className="w-2/5 bg-gray-700 p-8 rounded-2xl">
        <h1 className="font-bold text-white text-4xl">Register</h1>

        <div className="space-y-4">
          <input
            className="bg-gray-500 text-white px-4 py-2 w-full rounded-xl outline-0"
            placeholder="email"
            type="email"
          />
          <input
            className="bg-gray-500 text-white px-4 py-2 w-full rounded-xl outline-0"
            placeholder="password"
            type="password"
          />
           <input
            className="bg-gray-500 text-white px-4 py-2 w-full rounded-xl outline-0"
            placeholder="confirm password"
            type="password"
          />
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold cursor-pointer px-4 py-2 w-full rounded-xl">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
