import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import ErrorPath from "./Components/ErrorPath";
import About from "./Components/About";

function App() {
  // const [login, setLogin] = useState();
  return (
    <div className="App">
      {" "}
      <nav className="nav">
        <ul className="topnav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <button onClick={() => setLogin("Login")}>Login</button>
        <button onClick={() => setLogin("signup")}>signup</button>
        <button onClick={() => setLogin("")}>logout</button>
      </div> */}
      {/* {!login ? null : login === "Login" ? <Login /> : <SignUp />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
      
    </div>
  );
}

export default App;
