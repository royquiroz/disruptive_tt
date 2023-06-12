/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Route, useLocation } from "wouter";

import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CreateContent from "./pages/CreateContent";
import Search from "./pages/Search";

function App() {
  const [user, setUser] = useState(null);
  const [location, _setLocation] = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  function canCreate() {
    return user?.role === "admin" || user?.role === "creator";
  }

  return (
    <>
      <Topbar user={user} />
      <Route path="/home" component={Home} />
      <Route path="/search" component={Search} />
      {!user && (
        <>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </>
      )}
      <Route path="/create_content" component={CreateContent} />
    </>
  );
}

export default App;
