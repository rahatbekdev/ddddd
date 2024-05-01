import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { Users } from "./components/pages/Users";
import { Ricky } from "./components/pages/Ricky";
import MainHeader from "./components/main-header/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState({});

  const [selectedPage, setSelectedPage] = useState("");
  const [color, setColor] = useState("black");

  const onChangePage = (page) => {
    setSelectedPage(page);

    if (page === "users" || page === "admin" || page === "Rick and Morty") {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  useEffect(() => {
    const isLogged = localStorage.getItem("auth") || false;
    setIsLoggedIn(isLogged);
    console.log("workkkkkk");
  }, []);

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    setIsLoggedIn(true);
    localStorage.setItem("auth", isLoggedIn);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader
        isLoggedIn={isLoggedIn}
        onChangePage={onChangePage}
        color={color}
        activePage={selectedPage}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && selectedPage === "home" && (
          <Home onLogout={logoutHandler} />
        )}
        {selectedPage === "users" && <Users />}
        {selectedPage === "Rick and Morty" && <Ricky />}
      </main>
    </React.Fragment>
  );
}

export default App;
