/* eslint-disable no-unused-vars */
import { Link, useLocation } from "wouter";

function Topbar({ user }) {
  const [_location, setLocation] = useLocation();

  function clearSession() {
    localStorage.removeItem("user");
    setLocation("login");
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/home">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/search">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Search
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!user ? (
              <>
                <Link href="/login">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Log In
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Sign Up
                  </a>
                </Link>
              </>
            ) : (
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                onClick={clearSession}
              >
                Log Out
              </a>
            )}
            <div className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium">
              {user?.username?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
