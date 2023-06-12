/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "wouter";

import { authUser, createUser } from "../services/users";

function SignUp() {
  const [user, setUser] = useState({});
  const [_location, setLocation] = useLocation();
  console.log(user);

  async function handleSubmit(e) {
    e.preventDefault();
    await createUser(user);
    const res = await authUser(user);
    localStorage.setItem("user", JSON.stringify(res));
    setLocation("/home");
  }

  function handleChange(e) {
    delete user[e.target.name];
    setUser({ [e.target.name]: e.target.value, ...user });
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="container">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                onChange={handleChange}
              />
            </div>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                onChange={handleChange}
              />
            </div>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                onChange={handleChange}
              />
            </div>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Role
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                name="role"
                id="role"
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="reader">Reader</option>
                <option value="creator">Creator</option>
              </select>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
