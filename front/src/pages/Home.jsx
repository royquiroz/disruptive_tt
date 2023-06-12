/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { getContent } from "../services/content";

function Themes() {
  const [content, setContent] = useState([]);
  const [user, setUser] = useState(null);
  const [_location, setLocation] = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    fetchData();
  }, []);

  async function fetchData() {
    const res = await getContent();

    setContent(res);
  }

  function canCreate() {
    return user?.role === "admin" || user?.role === "creator";
  }

  return (
    <section className="m-10">
      {canCreate() && (
        <button
          className="absolute top-24 right-24 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setLocation("/create_content")}
        >
          Agregar contenido
        </button>
      )}
      <>
        {content.map((content) => (
          <div
            key={content.id}
            className="z-10 mt-3 p-4 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg"
          >
            <h3 className="text-lg text-center font-semibold leading-7 text-gray-900">
              {content.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              {content.description}
            </p>
            {content.value.includes(".jpg") ? (
              <img
                className="flex-none bg-gray-50"
                src={content.value}
                alt={content.name}
              />
            ) : (
              <a
                className="text-sm font-semibold leading-6 text-gray-900"
                href={content.value}
              >
                Link
              </a>
            )}
            <p className="text-right mt-6 text-xs leading-5 text-gray-600">
              Creditos: {content.username}
            </p>
          </div>
        ))}
      </>
    </section>
  );
}

export default Themes;
