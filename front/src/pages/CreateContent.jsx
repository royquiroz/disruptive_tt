/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { getThemes } from "../services/themes";
import { createContent } from "../services/content";

function CreateContent() {
  const [themes, setThemes] = useState([]);
  const [content, setContent] = useState({});
  const [user, setUser] = useState(null);
  const [_location, setLocation] = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    fetchData();
  }, []);

  async function fetchData() {
    const res = await getThemes();

    setThemes(res);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { ...content, user: user.email };

    await createContent(body);
    setLocation("/home");
  }

  function handleChange(e) {
    delete content[e.target.name];
    setContent({ [e.target.name]: e.target.value, ...content });
  }

  function handleSelectedFile(e) {
    setContent({ [e.target.name]: e.target.files[0], ...content });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Content
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="container">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Theme
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                name="related"
                onChange={handleChange}
              >
                <option key="" value="">
                  -----
                </option>
                {themes.map((theme) => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Enter your text, url or file
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="value"
                onChange={handleChange}
              />
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file"
                        type="file"
                        className="sr-only"
                        onChange={handleSelectedFile}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                rows="4"
                cols="30"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create content
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContent;
