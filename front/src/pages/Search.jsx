import { useState } from "react";

function LogIn() {
  const [user, setUser] = useState({});

  async function handleSearch(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    delete user[e.target.name];
    setUser({ [e.target.name]: e.target.value, ...user });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Search
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-2">
          <input
            type="text"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleSearch}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
