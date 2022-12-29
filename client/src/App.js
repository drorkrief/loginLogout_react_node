import React from "react";
import "./App.css";
import Register from "./components/Register";
import { Routes, Route, Link, useSearchParams  } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import ErrorPath from "./components/ErrorPath";
import About from "./components/About";
import MailVerification from "./components/MailVerification";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [login, setLogin] = useState();
  let urlparams = searchParams.entries()
  console.log("searchParams.get(code)",urlparams);
  
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
            <Link to="/logIn">LogIn</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
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
        <Route path="logIn" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="verification" element={<MailVerification test="123123123" code={searchParams.get("code")} />} />
        <Route path="*" element={<ErrorPath />} />

      </Routes>
      
    </div>
  );
}

export default App;
